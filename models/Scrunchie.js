const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Scrunchie extends Model {}

Scrunchie.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    inventory: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    collection_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'collection',
        key: 'id'
      }
    },
    cogs: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'scrunchie'
  }
);

module.exports = Scrunchie;
