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

router.get('/edit/scrunchie/:id', withAuth, (req, res) => {
  Scrunchie.findByPk(req.params.id, {
      attributes: ['id', 'title', 'inventory', 'price', 'collection_id', 'cogs'],
      include: [
        {
          model: Collection,
          attributes: ['id', 'title'],
        }
      ]
    })
    .then(ScrunchieData => {
      if (ScrunchieData) {
        const scrunchie = ScrunchieData.get({ plain: true });
        
        res.render('edit-scrunchie', {
          scrunchie,
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

module.exports = router;
