const Endereco = require("./Endereco");

module.exports = (sequelize, DataTypes) => {
    const Cliente = sequelize.define("Cliente", {
        id_cliente : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        razaoSocial: DataTypes.STRING,
        cnpj: DataTypes.STRING(18),
        nomeFantasia: DataTypes.STRING,
        nomeResponsavel: DataTypes.STRING,
        telefoneFixo: DataTypes.STRING(14),
        telefoneCelular: DataTypes.STRING(15),
        dataEntrada : DataTypes.DATE,
        dataSaida : DataTypes.DATE,
        logotipoCliente: DataTypes.BLOB('long')
    }, {
        tableName: 'clientes',
        timestamps: true,
        paranoid: true
    });

    Cliente.associate = (models) => {
        Cliente.hasMany(models.Endereco, { as: "enderecoObj", foreignKey: "id_cliente" });
        Cliente.hasMany(models.Contrato, { as: "contratoObj", foreignKey: "id_cliente" });
        Cliente.belongsToMany(models.Funcionario, { as: "funcionarioObj", foreignKey: "id_funcionario", through: "ClienteHasFuncionario" }); // o sistema não precisa da model funcionario_has_cliente. Nesse caso é só colocar em through o nome da tabela intermediária.
    } 

    return Cliente;
}