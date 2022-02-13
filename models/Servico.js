module.exports = (sequelize, DataTypes) => {
    const Servico = sequelize.define("Servico", {
        id_servico : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nomeServico: DataTypes.STRING,
        tipoServico: DataTypes.STRING,
        valorServico: DataTypes.DECIMAL(7,2).UNSIGNED,
        descricaoServico: DataTypes.TEXT
        
    }, {
        tableName: 'servicos',
        timestamps: true,
        paranoid: true
    });

    Servico.associate = (models) => {
        Servico.hasMany(models.Comissao, { as: "comissaoObj", foreignKey: "id_servico" });
        Servico.hasMany(models.Metrica, { as: "metricaObj", foreignKey: "id_servico" });
        Servico.belongsToMany(models.Contrato, { as: "contratoObj", foreignKey: "id_contrato", through: "models.ServicoHasContrato" });
    } 

    return Servico;
}