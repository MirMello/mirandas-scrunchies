const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const collectionRoutes = require('./collection-routes.js');
const logRoutes = require('./log-routes.js');
const scrunchieRoutes = require('./scrunchie-routes.js');

router.use('/users', userRoutes)
router.use('/collections', collectionRoutes)
router.use('/logs', logRoutes)
router.use('/scrunchies', scrunchieRoutes)

module.exports = router;