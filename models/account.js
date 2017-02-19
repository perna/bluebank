'use strict';

module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define('Account', {
    balance: DataTypes.DECIMAL(10,2),
    number: DataTypes.INTEGER(9).UNSIGNED.ZEROFILL
  }, {
      classMethods: {
        associate: function(models) {
        
      },
      paranoid: true,
      freezeTableName: true,
      tableName: 'account',
      underscored: true
    }
  });
  return Account;
};