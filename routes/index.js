const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

<<<<<<< HEAD
router.use('/phone',require('./phone'))
=======

router.use('/places',require('./places'));
>>>>>>> abb1223d168f0da7cbfd66bc2a108a4cbc841fb3

module.exports = router;
