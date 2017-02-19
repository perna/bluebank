'use strict';
module.exports = function(sequelize, DataTypes) {
  var Transactional_History = sequelize.define('Transactional_History', {
    type: DataTypes.STRING,
    value: DataTypes.DECIMAL(10,2)
  }, {
    underscored: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Transactional_History;
};