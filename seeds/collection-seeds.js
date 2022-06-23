const { Collection } = require('../models');

const collectiondata = [
    {
        collection_id: 1,
        title: "Fall Scrunchies"
      },
      {
        collection_id: 2,
        title: "Halloween Scrunchies"
      },
      {
        collection_id: 3,
        title: "Plaid Scrunchies"
      },
      {
        collection_id: 4,
        title: "Linen Scrunchies"
      },
      {
        collection_id: 5,
        title: "The Mandalorian"
      },
      {
        collection_id: 6,
        title: "Minky Scrunchies"
      },
      {
        collection_id: 7,
        title: "Polkadot Scrunchies"
      },
      {
        collection_id: 8,
        title: "B&W Scrunchies"
      },
      {
        collection_id: 9,
        title: "Pastel Scrunchies"
      },
      {
        collection_id: 10,
        title: "Orange Scrunchies"
      },
      {
        collection_id: 11,
        title: "Floral Scrunchies"
      },
      {
        collection_id: 12,
        title: "Christmas Scrunchies"
      },
      {
        collection_id: 13,
        title: "Stars & Stripes"
      },
      {
        collection_id: 14,
        title: "Pink Scrunchies"
      },
      {
        collection_id: 15,
        title: "Green Scrunchies"
      },
      {
        collection_id: 16,
        title: "Other Scrunchies"
      },
      {
        collection_id: 17,
        title: "Satin Scrunchies"
      },
      {
        collection_id: 18,
        title: "Harry Potter"
      }
];

const seedCollections = () => Collection.bulkCreate(collectiondata);

module.exports = seedCollections;