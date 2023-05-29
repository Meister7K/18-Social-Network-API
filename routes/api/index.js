const router = require('express').Router();
//set api routes like: const vidRoutes = require('./vidRoutes');
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

router.use('/user',userRoutes);
router.use('/thought',thoughtRoutes);

// set router like: router.use('/vid', vidRoutes);

module.exports = router;