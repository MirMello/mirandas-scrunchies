const Collection = require('./Collection');
const Scrunchie = require('./Scrunchie');
const Sales = require('./Sales');

// A reader can have many books
Collection.hasMany(Scrunchie, {
  foreignKey: 'scrunchie_id',
  onDelete: 'CASCADE'
});

// A book belongs to a single reader
Scrunchie.belongsTo(Collection, {
  foreignKey: 'collection_id'
});
module.exports = { Collection, Scrunchie, Sales };
