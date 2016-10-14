var express = require('express');
var router = express.Router();
var billboard = require("billboard-top-100");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/game', function(req, res, next) {
  res.render('game', { title: 'Express' });
  billboard(function(songs){
    console.log(songs); //prints array of top 100 songs
  });
});

router.get('/writing', function(req, res, next) {
  res.render('writing', { title: 'Express' });
});

module.exports = router;
