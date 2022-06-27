const router = require('express').Router();
const sequelize = require('../../config/connection');
const {  Scrunchie } = require('../../models');
const withAuth = require('../../utils/auth');
module.exports = router;
router.get('/', withAuth, (req, res) => {
    console.log('======================scrunchie======================');
    Scrunchie.findAll({
      raw: true
    })

    .then(ScrunchieData => {
      const scrunchieTitles = []
      for(let i=0; i<ScrunchieData.length; i++) {
        if(scrunchieTitles.indexOf(ScrunchieData[i].title) === -1) {
          scrunchieTitles.push({
            title: ScrunchieData[i].title,
            id: ScrunchieData[i].id,
            inventory: ScrunchieData[i].inventory,
            cogs: ScrunchieData[i].cogs
          })
        }
      }
      console.log(ScrunchieData)
      console.log(scrunchieTitles)
      res.render('inventoriesScrunchies', {
        scrunchieTitles,
        loggedIn: req.session.loggedIn
      })
    })
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

router.put('/:id', withAuth, (req, res) => {
  Scrunchie.update(
    {
      title: req.body.title,
      inventory: req.body.inventory,
      price: req.body.price,
      cost: req.body.cogs
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(scrunchieData => {
      if (!scrunchieData) {
        res.status(404).json({ message: 'No Scrunchie found with this id' });
        return;
      }
      res.json(scrunchieData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', withAuth, (req, res) => {
  Scrunchie.destroy({
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