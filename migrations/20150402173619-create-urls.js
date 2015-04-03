"use strict";
module.exports = {
  up: function(migration, DataTypes, done) {
    migration.createTable("urls", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      longUrl: {
        type: DataTypes.STRING
      },
      shortUrl: {
        type: DataTypes.STRING
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    }).done(done);
  },
  down: function(migration, DataTypes, done) {
    migration.dropTable("urls").done(done);
  }
};