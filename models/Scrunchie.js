const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Scrunchie extends Model {}

Scrunchie.init(
  {
    scrunchie_id: {
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
    category: {
      type: DataTypes.STRING,
      references: {
        model: 'collection',
        key: 'collection_id'
      }
    },
    mats: {
      type: DataTypes.INTEGER,
      allowNull: false
    },



    // Store a reference of the `id` of the `Reader` that owns this Book
    collection_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Collection',
        key: 'collection_id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Scrunchie'
  }
);

module.exports = Scrunchie;
