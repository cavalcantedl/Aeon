module.exports = (sequelize, DataTypes) => {
    const Funcionario = sequelize.define("Funcionario", {
        id_funcionario : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nome: DataTypes.STRING,
        dataAdmissao : DataTypes.DATEONLY,
        dataDemissao : DataTypes.DATEONLY,
        nomeFuncao:  DataTypes.STRING,
        salario: DataTypes.DECIMAL(7,2),
        id_endereco: DataTypes.INTEGER.UNSIGNED,
         
    }, {
        tableName: 'funcionarios',
        timestamps: true,
        paranoid: true
    });
    
    Funcionario.associate = (models) => {
        Funcionario.hasMany(models.Contrato, { as: "contratoObj", foreignKey: "id_funcionario" });
        Funcionario.hasMany(models.Comissao, { as: "comissaoObj", foreignKey: "id_funcionario" });
        Funcionario.belongsTo(models.Endereco, { as: "endereco", foreignKey: "id_endereco" });
        Funcionario.belongsToMany(models.Cliente, { as: "clienteObj", foreignKey: "id_cliente", through: "ClienteHasFuncionario" });
        Funcionario.belongsToMany(models.Ferramenta, { as: "ferramentaObj", foreignKey: "id_ferramenta", through: "FuncionarioHasFerramenta" });
    } 


    return Funcionario;
}