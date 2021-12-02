'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('funcionarios_has_ferramentas', { 
        id_funcionario: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, allowNull: false, references: { model: 'funcionarios', key: 'id_funcionario' } },
        id_ferramenta: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, allowNull: false, references: { model: 'ferramentas', key: 'id_ferramenta' } },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('funcionarios_has_ferramentas');
  }
};