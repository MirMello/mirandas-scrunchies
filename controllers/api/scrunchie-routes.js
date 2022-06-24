const router = require('express').Router();
const sequelize = require('../../config/connection');
const {  Scrunchie } = require('../../models');
const withAuth = require('../../utils/auth');
module.exports = router;
router.get('/', withAuth, (req, res) => {
    console.log('======================scrunchie======================');
    Scrunchie.findAll()
    .then(scrunchieData => res.json(scrunchieData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.post('/', withAuth, (req, res) => {
  // expects => {comment_text: "This is the comment", user_id: 1, post_id: 2}
  Scrunchie.create({
    title: req.body.scrunchie_title,
    inventory: req.body.scrunchie_inventory,
    collection_id: req.body.collection_id,
    cogs: req.body.cogs
  })
    .then(scrunchieData => res.json(scrunchieData))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(scrunchieData => {
      if (!scrunchieData) {
        res.status(404).json({ message: 'No scrunchie found with this id!' });
        return;
      }
      res.json(scrunchieData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;