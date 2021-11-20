'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('clientes', { 
        id_cliente: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        razao_social: { type: Sequelize.DataTypes.STRING, allowNull: false },
        cnpj: { type: Sequelize.DataTypes.STRING(14), allowNull: false },
        nome_fantasia: { type: Sequelize.DataTypes.STRING, allowNull: false },
        telefone_fixo: { type: Sequelize.DataTypes.STRING, allowNull: false },
        telefone_celular: { type: Sequelize.DataTypes.STRING, allowNull: false },
        nome_responsavel: { type: Sequelize.DataTypes.STRING, allowNull: false },
        data_entrada: Sequelize.DataTypes.DATE,
        data_saida: { type: Sequelize.DataTypes.DATE },
        createdAt: { type: Sequelize.DataTypes.DATE },
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('clientes');
  }
};
