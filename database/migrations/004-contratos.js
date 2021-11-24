'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('contratos', { 
        id_contrato: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        descricao_contrato: { type: Sequelize.DataTypes.TEXT },
        id_cliente: { type: Sequelize.DataTypes.INTEGER, references: { model: 'clientes', key: 'id_cliente' } },
        id_funcionario: { type: Sequelize.DataTypes.INTEGER, references: { model: 'funcionarios', key: 'id_funcionario' } },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('contratos');
  }
};
