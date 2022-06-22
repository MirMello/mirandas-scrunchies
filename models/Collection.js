const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Collection extends Model {}

Collection.init(
  {
    collection_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'collection'
  }
);

module.exports = Collection;
