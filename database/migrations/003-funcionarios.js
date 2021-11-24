'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('funcionarios', { 
        id_funcionario: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        nome: { type: Sequelize.DataTypes.STRING, allowNull: false },
        salario: { type: Sequelize.DataTypes.DECIMAL.UNSIGNED, allowNull: false },
        nome_funcao: { type: Sequelize.DataTypes.STRING, allowNull: false },
        data_admissao: Sequelize.DataTypes.DATE,
        data_demissao: { type: Sequelize.DataTypes.DATE },
        createdAt: { type: Sequelize.DataTypes.DATE },
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('funcionarios');
  }
};
