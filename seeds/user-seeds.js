const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    user_id: 1,
    username: 'root',
    email: 'example@example.com',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
