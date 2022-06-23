const router = require('express').Router();
const { User } = require('../../models');

// get all users
router.get('/', (req, res) => {
  User.findAll({
    attributes: { exclude: ['password'] }
  })
    .then(userdata => res.json(userdata))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Login
router.post('/login', (req, res) => {
  // expects {email: 'lernantino@gmail.com', password: 'password1234'}
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(userdata => {
    if (!userdata) {
      res.status(400).json({ message: 'No user with that email address!' });
      return;
    }

    const validPassword = userdata.checkPassword(req.body.password);

    if (!validPassword) {
      res.status(400).json({ message: 'Incorrect password!' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userdata.id;
      req.session.username = userdata.username;
      req.session.loggedIn = true;
  
      res.json({ user: userdata, message: 'You are now logged in!' });
    });
  });
});

// Logout
router.post('/logout', (req, res) => {
  // When the user logs out, destroy the session
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
