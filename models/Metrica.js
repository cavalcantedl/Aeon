module.exports = (sequelize, DataTypes) => {
    const Metrica = sequelize.define("Metrica", {
        id_metrica : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        nomeMetrica: DataTypes.STRING,
        tipoMetrica: DataTypes.STRING,
        valorMetrica: DataTypes.DECIMAL(6,2).UNSIGNED,
        servico: DataTypes.INTEGER.UNSIGNED

    }, {
        tableName: 'metricas',
        timestamps: true,
        paranoid: true
    });

    Metrica.associate = (models) => {
        Metrica.belongsTo(models.Servico, { as: "servicoObj", foreignKey: "id_servico" });
    } 

    return Metrica;
}