const router = require('express').Router();
const sequelize = require('../../config/connection');
const {  Log } = require('../../models');
const withAuth = require('../../utils/auth');
router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('======================Logs======================');
    Log.findAll()
    .then(logData => res.json(logData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  });

module.exports = router;