'use strict';

module.exports = function(sequelize, DataTypes) {
  var Transactional_History = sequelize.define('Transactional_History', {
    type_transaction: DataTypes.STRING,
    value: DataTypes.DECIMAL(10,2),
    account_emmiter: DataTypes.STRING(9),
    account_sender:  DataTypes.STRING(9),
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return Transactional_History;
};