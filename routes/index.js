const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});


router.use('/places',require('./places'));
router.use('/email', require('./email'));
router.use('/phone', require('./phone'));

module.exports = router;
