'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('clientes', { 
        id_cliente: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        razaoSocial: { type: Sequelize.DataTypes.STRING, allowNull: false },
        cnpj: { type: Sequelize.DataTypes.STRING(18), allowNull: false },
        nomeFantasia: { type: Sequelize.DataTypes.STRING, allowNull: false },
        telefoneFixo: { type: Sequelize.DataTypes.STRING(14), allowNull: true    },
        telefoneCelular: { type: Sequelize.DataTypes.STRING(15), allowNull: false },
        nomeResponsavel: { type: Sequelize.DataTypes.STRING, allowNull: false },
        dataEntrada: { type: Sequelize.DataTypes.DATEONLY, allowNull: false },
        dataSaida: { type: Sequelize.DataTypes.DATEONLY, allowNull: true },
        logotipoCliente: { type: Sequelize.DataTypes.BLOB('long'), allowNull: true },
        id_endereco: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, references: { model: 'enderecos', key: 'id_endereco' }, onUpdate: 'CASCADE', onDelete: 'CASCADE', },
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('clientes');
  }
};
