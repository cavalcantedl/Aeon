module.exports = (sequelize, DataTypes) => {
    const Endereco = sequelize.define("Endereco",{
        id_endereco : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        logradouro:  DataTypes.STRING,
        numero: DataTypes.STRING(45),
        complemento: DataTypes.STRING(45),
        bairro: DataTypes.STRING(45),
        cidade: DataTypes.STRING(45),
        estado: DataTypes.STRING(2),
        pais: DataTypes.STRING(45),
        cep: DataTypes.STRING(8),
        cliente: DataTypes.INTEGER.UNSIGNED,
        funcionario: DataTypes.INTEGER.UNSIGNED
        
    }, {
        tableName: 'enderecos',
        timestamps: true,
        paranoid: true
    });

    Endereco.associate = (models) => {
        Endereco.belongsTo(models.Cliente, { as: "clienteObj", foreignKey: "id_cliente" });
        Endereco.belongsTo(models.Funcionario, { as: "funcionarioObj", foreignKey: "id_funcionario" });
    }  

    return Endereco;
}