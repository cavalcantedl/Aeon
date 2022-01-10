'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('servicos_has_contratos', { 
        id_servico: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, allowNull: false, references: { model: 'servicos', key: 'id_servico' } },
        id_contrato: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, allowNull: false, references: { model: 'contratos', key: 'id_contrato' } },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('servicos_has_contratos');
  }
};