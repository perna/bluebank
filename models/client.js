'use strict';
module.exports = function(sequelize, DataTypes) {
  var Client = sequelize.define('Client', {
    cpf: {
      type: DataTypes.STRING(11),
      allowNull: false,
      unique: true,
      validate:{notEmpty: true}
    }

  }, {
      classMethods: {
        associate: function(models) {
          Client.hasMany(models.Account);
        }
      },

      underscored: true,
      paranoid: true,
      freezeTableName: true,
      tableName: 'client',
      indexes:[
        {
          unique: true,
          fields:['cpf']
        }
      ]
  });
  return Client;
};