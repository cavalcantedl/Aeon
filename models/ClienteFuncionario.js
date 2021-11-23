module.exports = (sequelize, DataTypes) => {
    const ClienteHasFuncionario = sequelize.define("ClienteHasFuncionario", {
        id_cliente: DataTypes.INTEGER.UNSIGNED,
        id_funcionario: DataTypes.INTEGER.UNSIGNED
    },
    {
        tableName: "cliente_has_funcionario",
        timestamps: true,
        paranoid: true
    });
}