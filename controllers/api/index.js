const router = require('express').Router();

const userRoutes = require('./user-routes');
const collectionRoutes = require('./collection-routes');
const logRoutes = require('./log-routes');
const scrunchieRoutes = require('./scrunchie-routes');

router.use('/users', userRoutes, collectionRoutes, logRoutes, scrunchieRoutes);

module.exports = router;