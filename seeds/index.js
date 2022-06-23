const seedUsers = require('./user-seeds');
const seedCollections = require('./collection-seeds');
const seedScrunchies = require('./scrunchies-seeds');
const seedLogs = require('./log-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedCollections();
  console.log('--------------');

  await seedScrunchies();
  console.log('--------------');

  await seedComments();
  console.log('--------------');

  await seedLogs();
  console.log('--------------');

  process.exit(0);
};

seedAll();
