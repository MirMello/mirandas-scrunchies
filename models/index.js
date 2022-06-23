const Collection = require('./Collection');
const Scrunchie = require('./Scrunchie');
const Log = require('./Log');
const User = require('./User');

// A Collection can have many Scrunchies
Collection.hasMany(Scrunchie, {
  foreignKey: 'collection_id',
  onDelete: 'CASCADE'
});

// A Scrunchie belongs to a single Collection
Scrunchie.belongsTo(Collection, {
  foreignKey: 'scrunchie_id'
});

// A User can have many Logs
User.hasMany(Log, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});
// A Log belongs to a single User
Log.belongsTo(User, {
  foreignKey: 'log_id'
});

module.exports = { Collection, Scrunchie, Log, User };