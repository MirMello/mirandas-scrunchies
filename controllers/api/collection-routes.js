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
      include: [
        {
          model: Scrunchie,
          attributes: ['id', 'title', 'inventory', 'price', 'cogs'],
        }
      ]
    })
    .then(CollectionData => res.json(CollectionData))
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
  // expects {title: 'Taskmaster goes public!', post_url: 'https://taskmaster.com/press', user_id: 1}
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
  Post.update(
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
  Post.destroy({
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