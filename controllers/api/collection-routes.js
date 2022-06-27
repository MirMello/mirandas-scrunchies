const router = require('express').Router();
const sequelize = require('../../config/connection');
const {  Collection, Scrunchie } = require('../../models');
const withAuth = require('../../utils/auth');
router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('======================Collections======================');
    Collection.findAll({
      attributes: [
        'id',
        'title',
        [sequelize.literal('(SELECT COUNT(*) FROM scrunchie WHERE collection.id = scrunchie.collection_id)'), 'scrunchie_count']
      ],
      raw: true
    })
    .then(CollectionData => {
      const collectionTitles = []
      for(let i=0; i<CollectionData.length; i++) {
        if(collectionTitles.indexOf(CollectionData[i].title) === -1) {
          collectionTitles.push({
            title: CollectionData[i].title,
            id: CollectionData[i].id
          })
        }
      }
      console.log(CollectionData)
      console.log(collectionTitles)
      res.render('inventoriesCollections', {
        collectionTitles,
        loggedIn: req.session.loggedIn
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });
router.get('/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(CollectionData => {
      if (!CollectionData) {
        res.status(404).json({ message: 'No collection found with this id' });
        return;
      }
      res.json(CollectionData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.post('/', withAuth, (req, res) => {
  // expects {title: 'Taskmaster goes public!',}
  Collection.create({
    title: req.body.title,
  })
    .then(CollectionData => res.json(CollectionData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', withAuth, (req, res) => {
  Collection.update(
    {
      title: req.body.title
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(CollectionData => {
      if (!CollectionData) {
        res.status(404).json({ message: 'No Collection found with this id' });
        return;
      }
      res.json(CollectionData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.delete('/:id', withAuth, (req, res) => {
  console.log('id', req.params.id);
  Collection.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(CollectionData => {
      if (!CollectionData) {
        res.status(404).json({ message: 'No Collection found with this id' });
        return;
      }
      res.json(CollectionData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


module.exports = router;