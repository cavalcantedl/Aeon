module.exports = (sequelize, DataTypes) => {
    const Custo = sequelize.define("Custo",{
        id_custo : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        tipo: DataTypes.STRING,
        valor: DataTypes.DECIMAL(10,2).UNSIGNED,
        tipoCusto: DataTypes.ENUM('fixo', 'variado'),
        ferramenta: DataTypes.INTEGER.UNSIGNED,
        funcionario: DataTypes.INTEGER.UNSIGNED

    }, {
        tableName: 'custos',
        timestamps: true,
        paranoid: true
    });

    return Custo;
}