const Collection = require('./Collection');
const Scrunchie = require('./Scrunchie');
const Log = require('./Log');
const User = require('./User');

// A Collection can have many Scrunchies
Collection.hasMany(Scrunchie, {
  foreignKey: 'category',
  onDelete: 'CASCADE'
});

// A Scrunchie belongs to a single Collection
Scrunchie.belongsTo(Collection, {
  foreignKey: 'category'
});
module.exports = { Collection, Scrunchie, Log, User };