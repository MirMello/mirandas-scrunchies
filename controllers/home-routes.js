const router = require('express').Router();
const { User, Collection } = require('../models');
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
    }
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
