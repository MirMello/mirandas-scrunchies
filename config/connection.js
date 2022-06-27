const Sequelize = require('sequelize');
require('dotenv').config();

// create connection to our db
const sequelize = new Sequelize(process.env.JAWSDB_URL, {
  dialect: 'mysql',
}); 

module.exports = sequelize;