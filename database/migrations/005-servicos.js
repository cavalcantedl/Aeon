'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('servicos', { 
        id_servico: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        nome_servico: { type: Sequelize.DataTypes.STRING, allowNull: false },
        tipo_servico: { type: Sequelize.DataTypes.STRING, allowNull: false },
        valor_servico: { type: Sequelize.DataTypes.DECIMAL(7, 2).UNSIGNED, allowNull: false },
        descricao_servico: { type: Sequelize.DataTypes.TEXT },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('servicos');
  }
};