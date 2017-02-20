'use strict';

module.exports = function(sequelize, DataTypes) {
  var Account = sequelize.define('Account', {
    balance: DataTypes.DECIMAL(10,2),
    number: DataTypes.STRING(9)
  }, {
      classMethods: {
        associate: function(models) {
        
      },
      paranoid: true,
      freezeTableName: true,
      tableName: 'account',
      underscored: true,
      indexes:[
        {
          unique: true,
          fields:['number']
        }
      ]
    }
  });
  return Account;
};