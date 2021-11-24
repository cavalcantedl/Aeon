'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('enderecos', { 
        id_endereco: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        logradouro:{ type: Sequelize.DataTypes.STRING, allowNull: false },
        numero:{ type: Sequelize.DataTypes.STRING, allowNull: false },
        complemento:{ type: Sequelize.DataTypes.STRING, allowNull: true },
        bairro:{ type: Sequelize.DataTypes.STRING, allowNull: false },
        cidade:{ type: Sequelize.DataTypes.STRING, allowNull: false },
        estado:{ type: Sequelize.DataTypes.STRING, allowNull: false },
        pais:{ type: Sequelize.DataTypes.STRING, allowNull: true },
        cep:{ type: Sequelize.DataTypes.STRING, allowNull: false },
        createdAt: { type: Sequelize.DataTypes.DATE },
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('enderecos');
  }
};
