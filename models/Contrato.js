module.exports = (sequelize, DataTypes) => {
    const Contrato = sequelize.define("Contrato",{
        id_contrato : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        descricaoContrato: DataTypes.TEXT,
        cliente: DataTypes.INTEGER.UNSIGNED,
        funcionario: DataTypes.INTEGER.UNSIGNED
        
    }, {
        tableName: 'contratos',
        timestamps: true,
        paranoid: true
    });

    Contrato.associate = (models) => {
        Contrato.belongsTo(models.Cliente, { as: "clienteObj", foreignKey: "id_cliente" });
        Contrato.belongsTo(models.Funcionario, { as: "funcionarioObj", foreignKey: "id_funcionario " });
        Contrato.belongsToMany(models.Servico, { as: "servicoObj", foreignKey: "id_servico", through: models.ServicoHasContrato });
    } 
 
    return Contrato;
}