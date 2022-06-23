const { Collection } = require('../models');

const collectiondata = [
    {
        title: "Fall Scrunchies"
      },
      {
        title: "Halloween Scrunchies"
      },
      {
        title: "Plaid Scrunchies"
      },
      {
        title: "Linen Scrunchies"
      },
      {
        title: "The Mandalorian"
      },
      {
        title: "Minky Scrunchies"
      },
      {
        title: "Polkadot Scrunchies"
      },
      {
        title: "B&W Scrunchies"
      },
      {
        title: "Pastel Scrunchies"
      },
      {
        title: "Orange Scrunchies"
      },
      {
        title: "Floral Scrunchies"
      },
      {
        title: "Christmas Scrunchies"
      },
      {
        title: "Stars & Stripes"
      },
      {
        title: "Pink Scrunchies"
      },
      {
        title: "Green Scrunchies"
      },
      {
        title: "Other Scrunchies"
      },
      {
        title: "Satin Scrunchies"
      },
      {
        title: "Harry Potter"
      }
];

const seedCollections = () => Collection.bulkCreate(collectiondata);

module.exports = seedCollections;