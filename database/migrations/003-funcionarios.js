'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('funcionarios', { 
        id_funcionario: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        nome: { type: Sequelize.DataTypes.STRING, allowNull: false },
        salario: { type: Sequelize.DataTypes.DECIMAL(7,2).UNSIGNED, allowNull: false },
        nomeFuncao: { type: Sequelize.DataTypes.STRING, allowNull: false },
        dataAdmissao: { type: Sequelize.DataTypes.DATEONLY, allowNull: false },
        dataDemissao: { type: Sequelize.DataTypes.DATEONLY },
        fotoFuncionario: { type: Sequelize.DataTypes.BLOB('long'), allowNull: true },
        id_endereco: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'enderecos', key: 'id_endereco' } },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('funcionarios');
  }
};
