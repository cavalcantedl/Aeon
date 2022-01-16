const Cliente = require("./Cliente");

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
        cep: DataTypes.STRING(9)
        
    }, {
        tableName: 'enderecos',
        timestamps: true,
        paranoid: true
    });

    Endereco.associate = (models) => {
        Endereco.hasMany(models.Cliente, { as: "cliente", foreignKey: "id_endereco", onDelete: 'CASCADE' });
        Endereco.hasMany(models.Funcionario, { as: "funcionario", foreignKey: "id_endereco" });
    }  

    return Endereco;
}