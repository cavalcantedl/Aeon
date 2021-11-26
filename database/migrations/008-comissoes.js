'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('comissoes', { 
        id_comissao: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        valor_comissao: { type: Sequelize.DataTypes.DECIMAL(4, 2).UNSIGNED, allowNull: false },
        id_funcionario: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'funcionarios', key: 'id_funcionario' } },
        id_servico: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'servicos', key: 'id_servico' } },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('comissoes');
  }
};