module.exports = (sequelize, DataTypes) => {
    const Funcionario = sequelize.define("Funcionario", {
        id_funcionario : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        dataAdmissao : DataTypes.DATE,
        dataDemissao : DataTypes.DATE,
        nomeFuncao:  DataTypes.STRING,
        salario: DataTypes.DECIMAL(7,2)
         
    }, {
        tableName: 'funcionarios',
        timestamps: true,
        paranoid: true
    });
    
    Funcionario.associate = (models) => {
        Funcionario.hasMany(models.Contrato, { as: "contratoObj", foreignKey: "id_funcionario" });
        Funcionario.hasMany(models.Comissao, { as: "comissaoObj", foreignKey: "id_funcionario" });
        Funcionario.hasMany(models.Endereco, { as: "enderecoObj", foreignKey: "id_funcionario" });
        Funcionario.belongsToMany(models.Cliente, { as: "clienteObj", foreignKey: "id_cliente", through: models.ClienteHasFuncionario });
        Funcionario.belongsToMany(models.Ferramenta, { as: "ferramentaObj", foreignKey: "id_ferramenta", through: "models.FuncionarioHasFerramenta" });
    } 


    return Funcionario;
}