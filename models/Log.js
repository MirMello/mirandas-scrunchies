/* sales Data
sales_id
time sold
price
title
amount sold
*/


const { Model, DataTypes } = require('sales');
const sequelize = require('../config/connection');

class Sales extends Model {}

Sales.init(
  {
    sales_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    time_sold: {
      type: DataTypes.STRING,
      allowNull: false
    },
    amount_sold: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.STRING,
      references: {
        model: 'scrunchie',
        key: 'scrunchie_id'
      }
      
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
    modelName: 'sales'
  }
);

module.exports = Sales;
