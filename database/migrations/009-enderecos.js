'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('enderecos', { 
        id_endereco: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        logradouro:{ type: Sequelize.DataTypes.STRING, allowNull: false },
        numero:{ type: Sequelize.DataTypes.STRING(45), allowNull: false },
        complemento:{ type: Sequelize.DataTypes.STRING, allowNull: true },
        bairro:{ type: Sequelize.DataTypes.STRING, allowNull: false },
        cidade:{ type: Sequelize.DataTypes.STRING, allowNull: false },
        estado:{ type: Sequelize.DataTypes.STRING(2), allowNull: false },
        pais:{ type: Sequelize.DataTypes.STRING, allowNull: true },
        cep:{ type: Sequelize.DataTypes.STRING(8), allowNull: false },
        id_cliente: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'clientes', key: 'id_cliente' } },
        id_funcionario: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'funcionarios', key: 'id_funcionario' } },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('enderecos');
  }
};