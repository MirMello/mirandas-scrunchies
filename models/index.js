const Collection = require('./Collection');
const Scrunchie = require('./Scrunchie');
const Log = require('./Log');

// A reader can have many books
Collection.hasMany(Scrunchie, {
  foreignKey: 'category',
  onDelete: 'CASCADE'
});

// A Scrunchie belongs to a single Collection
Scrunchie.belongsTo(Collection, {
  foreignKey: 'category'
});
module.exports = { Collection, Scrunchie, Log };