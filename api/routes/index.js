var express = require('express');
var router = express.Router();

/* TODO will I use this? GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
