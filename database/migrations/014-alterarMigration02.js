module.exports = {
    up: function(queryInterface, Sequelize) {
      // logic for transforming into the new state
      return queryInterface.addColumn(
        'Clientes',
        'endereco',
        {type: Sequelize.INTEGER.UNSIGNED,  references: { model: 'enderecos', key: 'id_endereco' } }
      );
  
    },
  
    down: function(queryInterface, Sequelize) {
      // logic for reverting the changes
      return queryInterface.removeColumn(
        'Clientes',
        'endereco'
      );
    }
  }