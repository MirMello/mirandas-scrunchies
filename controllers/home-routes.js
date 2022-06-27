const router = require('express').Router();
const sequelize = require('../config/connection');
const { Scrunchie, Collection } = require('../models');
router.get('/', (req, res) => {
  console.log('======================HOME======================');
  res.render('homepage', {
    loggedIn: req.session.loggedIn
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

router.get('/scrunchie/:id', (req, res) => {
  Scrunchie.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'inventory',
      'cogs',
      'collection_id'
      [sequelize.literal('(SELECT COUNT(*) FROM scrunchie WHERE collection.id = scrunchie.collection_id)'), 'scrunchie_count']
    ],
    include: [
      {
        model: Scrunchie,
        attributes: ['id', 'title', 'inventory', 'price', 'cogs'],
      }
    ]
  })
    .then(ScrunchieData => {
      if (!ScrunchieData) {
        res.status(404).json({ message: 'No Scrunchie found with this id' });
        return;
      }

      const scrunchie = ScrunchieData.get({ plain: true });

      res.render('single-scrunchie', {
        scrunchie,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;
