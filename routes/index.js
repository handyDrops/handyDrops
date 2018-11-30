const express = require('express');
const router  = express.Router();


router.get('/', (req, res, next) => {
  res.render('index');
});


router.use('/places',require('./places'));
router.use('/email', require('./email'));
router.use('/phone', require('./phone'));
router.use('/service', require('./service'));
router.use('/descuentos', require('./descuentos'));


module.exports = router;
