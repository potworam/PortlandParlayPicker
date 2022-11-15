const router = require('express').Router();
const teamRoutes = require('./team-routes');

// add prefix of `/pizzas` to routes created in `pizza-routes.js`
router.use('/teams', teamRoutes);

module.exports = router;