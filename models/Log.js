const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Log extends Model {}

Log.init(
  {
    log_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    change: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      references: {
        model: 'scrunchie',
        key: 'scrunchie_id'
      }
    },
    user: {
      type: DataTypes.STRING,
      references: {
        model: 'user',
        key: 'user_id'
      }
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: 'log'
  }
);

module.exports = Log;
