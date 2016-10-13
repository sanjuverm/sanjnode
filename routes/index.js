var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/design', function(req, res, next) {
  res.render('design', { title: 'Express' });
});

router.get('/writing', function(req, res, next) {
  res.render('writing', { title: 'Express' });
});

module.exports = router;
