const router = require('express').Router();

router.use('/user', require('./user'));
router.use('/contact', require('./contact'));

module.exports = router;
