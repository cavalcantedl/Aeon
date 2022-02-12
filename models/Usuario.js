module.exports = (sequelize, DataTypes) => {
    const Usuario = sequelize.define("Usuario",{
        id_usuario : {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true
        },
        username: DataTypes.STRING,
        nome:  DataTypes.STRING(100),
        email: DataTypes.STRING(75),
        senha: DataTypes.STRING,
        ativo: DataTypes.BOOLEAN,
        is_administrador: DataTypes.BOOLEAN,
        ativo: DataTypes.BOOLEAN,
        imagem: DataTypes.STRING
        
    }, {
        tableName: 'usuarios',
        timestamps: true,
        paranoid: true
    });

    return Usuario;
}