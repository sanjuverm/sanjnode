var express = require('express');
var router = express.Router();
var billboard = require("billboard-top-100");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/game', function(req, res, next) {
  //Pick a number at random from 0 to 100
  var randomNum = Math.floor((Math.random() * 100) + 1);

  // if(!err){
    billboard(function(songs){
      //console.log(songs); //prints array of top 100 songs
      // console.log(songs[randomNum]);
      var magicSong = songs[randomNum];
      res.render('game', { title: 'Express' , billboard100songs: songs, magicSong:magicSong});
    });
  // }
});

router.get('/writing', function(req, res, next) {
  res.render('writing', { title: 'Express' });
});

module.exports = router;
