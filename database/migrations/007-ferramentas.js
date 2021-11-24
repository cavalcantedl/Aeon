'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('ferramentas', { 
        id_ferramenta: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        nome_ferramenta: { type: Sequelize.DataTypes.STRING, allowNull: false },
        descricao_ferramenta: { type: Sequelize.DataTypes.TEXT, allowNull: false },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('ferramentas');
  }
};