const router = require('express').Router();
const sequelize = require('../config/connection');
const {  User, Collection, Scrunchie } = require('../models');
const withAuth = require('../utils/auth');
router.get('/', withAuth, (req, res) => {
  console.log(req.session);
  console.log('======================dashboard======================');
  Collection.findAll()
    .then(CollectionData => {
      const collections = CollectionData.map(collection => collection.get({ plain: true }));
      res.render('dashboard', { collections, loggedIn: true });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get('/edit/:id', withAuth, (req, res) => {
  Collection.findByPk(req.params.id)
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
    }
  })
    .then(CollectionData => {
      if (!CollectionData) {
        res.status(404).json({ message: 'No Collection found with this id' });
        return;
      }

      const collection = CollectionData.get({ plain: true });

      res.render('single-post', {
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
