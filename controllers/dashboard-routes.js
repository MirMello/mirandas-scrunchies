const router = require('express').Router();
const sequelize = require('../config/connection');
const {  User, Collection, Scrunchie } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================dashboard======================');
  Collection.findAll({
    attributes: [
      'id',
      'title',
      [sequelize.literal('(SELECT COUNT(*) FROM scrunchie WHERE collection.id = scrunchie.collection_id)'), 'scrunchie_count']
    ],
    include: [
      {
        model: Scrunchie,
        attributes: ['id', 'title', 'inventory', 'price', 'cogs'],
      }
    ]
  })
  .then(CollectionData => {
    
    const invArray = []
    const collection = CollectionData.map(collection => collection.get({ plain: true }));
    for (let index = 0; index < collection.length; index++) {
      let inventory = 0
      const collectionObj = collection[index];
        for (let index = 0; index < collectionObj.scrunchies.length; index++) {
          const scrunchie = collectionObj.scrunchies[index];
          inventory += scrunchie.inventory
        }
        invArray.push({
          ...collectionObj,
          inventory
        })
    }
    res.render('dashboard', { invArray, loggedIn: true });
    
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});
router.get('/edit/:id', withAuth, (req, res) => {
  Collection.findByPk(req.params.id, {
    attributes: [
      'id',
      'title',
      [sequelize.literal('(SELECT COUNT(*) FROM scrunchie WHERE collection.id = scrunchie.collection_id)'), 'scrunchie_count']
    ],
    include: [
      {
        model: Scrunchie,
        attributes: ['id', 'title', 'inventory', 'price', 'cogs'],
      }
    ]
  })
    .then(CollectionData => {
      if (CollectionData) {
        const collection = CollectionData.get({ plain: true });
        
        res.render('edit-collection', {
          collection,
          loggedIn: true
        });
      } else {
        res.status(404).end();
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
// get single post
router.get('/collection/:id', (req, res) => {
  Collection.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      [sequelize.literal('(SELECT COUNT(*) FROM scrunchie WHERE collection.id = scrunchie.collection_id)'), 'scrunchie_count']
    ],
    include: [
      {
        model: Scrunchie,
        attributes: ['id', 'title', 'inventory', 'price', 'cogs'],
      }
    ]
  })
    .then(CollectionData => {
      if (!CollectionData) {
        res.status(404).json({ message: 'No Collection found with this id' });
        return;
      }

      const collection = CollectionData.get({ plain: true });

      res.render('single-collection', {
        collection,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
