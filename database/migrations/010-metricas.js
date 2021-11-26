'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('metricas', { 
        id_metrica: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        nome_metrica: { type: Sequelize.DataTypes.STRING, allowNull: false },
        tipo_servico: { type: Sequelize.DataTypes.STRING, allowNull: false },
        valor_metrica: { type: Sequelize.DataTypes.DECIMAL(6, 2).UNSIGNED, allowNull: false },
        id_servico: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'servicos', key: 'id_servico' } },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('metricas');
  }
};