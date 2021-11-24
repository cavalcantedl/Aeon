'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('custos', { 
        id_custo: { type: Sequelize.DataTypes.INTEGER.UNSIGNED, primaryKey: true, autoIncrement: true, allowNull: false },
        nome_custo: { type: Sequelize.DataTypes.STRING, allowNull: false },
        valor_custo: { type: Sequelize.DataTypes.DECIMAL(10,2).UNSIGNED, allowNull: false },
        tipo_custo: {type: Sequelize.DataTypes.ENUM('fixo', 'variado'), allowNull: false},
        createdAt: Sequelize.DataTypes.DATE,
        updatedAt: Sequelize.DataTypes.DATE,
        deletedAt: Sequelize.DataTypes.DATE
      });
    
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('custos');
  }
};
