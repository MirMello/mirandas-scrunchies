const Collection = require('./Collection');
const Scrunchie = require('./Scrunchie');
const Log = require('./Log');
const User = require('./User');

// A Collection can have many Scrunchies
Collection.hasMany(Scrunchie, {
  foreignKey: 'collection_id'
});

// A Scrunchie belongs to a single Collection
Scrunchie.belongsTo(Collection, {
  foreignKey: 'collection_id',
  onDelete: 'CASCADE'
});

// A User can have many Logs
User.hasMany(Log, {
  foreignKey: 'user_id'
});
// A Scrunchie belongs to a single Collection
Log.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL'
});


module.exports = { Collection, Scrunchie, Log, User };