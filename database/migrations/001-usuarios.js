'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('usuarios', { 
        id_usuario: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        username: { type: Sequelize.DataTypes.STRING, allowNull: false },
        nome: { type: Sequelize.DataTypes.STRING, allowNull: false },
        email: { type: Sequelize.DataTypes.STRING, allowNull: false },
        senha: { type: Sequelize.DataTypes.STRING, allowNull: false },
        imagem: { type: Sequelize.DataTypes.BLOB('long'), allowNull: true },
        is_administrador: { type: Sequelize.DataTypes.ENUM('sim', 'não'), allowNull: false },
        ativo: { type: Sequelize.DataTypes.ENUM('sim', 'não'), allowNull: false },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('usuarios');
  }
};
