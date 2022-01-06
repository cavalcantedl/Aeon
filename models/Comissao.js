module.exports = (sequelize, DataTypes) => {
    const Comissao = sequelize.define("Comissao",{
        id_comissao : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        valorComissao:  DataTypes.DECIMAL(4,2).UNSIGNED,
        id_funcionario: DataTypes.INTEGER.UNSIGNED,
        id_servico: DataTypes.INTEGER.UNSIGNED
        
    }, {
        tableName: 'comissoes',
        timestamps: true,
        paranoid: true
    });

    Comissao.associate = (models) => {
        Comissao.belongsTo(models.Funcionario, { as: "funcionarioObj", foreignKey: "id_funcionario" });
        Comissao.belongsTo(models.Servico, { as: "servicoObj", foreignKey: "id_servico" });
    } 

    return Comissao;
}