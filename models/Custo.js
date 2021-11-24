module.exports = (sequelize, DataTypes) => {
    const Custo = sequelize.define("Custo",{
        id_custo : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nome_custo: DataTypes.STRING,
        valor_custo: DataTypes.DECIMAL(10,2).UNSIGNED,
        tipo_custo: DataTypes.ENUM('fixo', 'variado'),
        ferramenta: DataTypes.INTEGER.UNSIGNED,
        funcionario: DataTypes.INTEGER.UNSIGNED

    }, {
        tableName: 'custos',
        timestamps: true,
        paranoid: true
    });

    return Custo;
}