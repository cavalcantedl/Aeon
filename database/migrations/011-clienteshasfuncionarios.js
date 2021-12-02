'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('clientes_has_funcionarios', { 
        id_cliente: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, allowNull: false, references: { model: 'clientes', key: 'id_cliente' } },
        id_funcionario: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, allowNull: false, references: { model: 'funcionarios', key: 'id_funcionario' } },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('clientes_has_funcionarios');
  }
};