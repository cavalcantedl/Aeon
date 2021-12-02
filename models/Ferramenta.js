module.exports = (sequelize, DataTypes) => {
    const Ferramenta = sequelize.define("Ferramenta",{
        id_ferramenta : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nomeFerramenta:  DataTypes.STRING,
        descricaoFerramenta: DataTypes.TEXT
        
    }, {
        tableName: 'ferramentas',
        timestamps: true,
        paranoid: true
    });

    Ferramenta.associate = (models) => {
        Ferramenta.belongsToMany(models.Funcionario, { as: "funcionarioObj", foreignKey: "id_funcionario", through: "models.FuncionarioHasFerramenta" });
    } 

    return Ferramenta;
}