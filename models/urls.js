"use strict";
module.exports = function(sequelize, DataTypes) {
  var urls = sequelize.define("urls", {
    longUrl: DataTypes.STRING,
    shortUrl: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return urls;
};