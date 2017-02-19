'use strict';

module.exports = function(sequelize, DataTypes) {
  var Agency = sequelize.define('Agency', {
    number: DataTypes.INTEGER(4).UNSIGNED.ZEROFILL
  }, {
      classMethods: {
      associate: function(models) {
        Agency.hasMany(models.Account);
      },

      underscored: true,
      paranoid: true,
      freezeTableName: true,
      tableName: 'agency',
      indexes:[
        {
          unique: true,
          fields:['number']
        }
      ]
    }
  });
  return Agency;
};


