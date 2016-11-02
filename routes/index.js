var express = require('express');
var router = express.Router();
var billboard = require("billboard-top-100");
var lyrFetchAPI = require('lyrics-fetcher');
var lyrics = require('gimme-lyrics');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/game', function(req, res, next) {
  //Pick a number at random from 0 to 100
  var randomNum = Math.floor((Math.random() * 100) + 1);
  var magicSongTitle;
  var magicSongArtist;
  // if(!err){
    billboard(function(songs){
      //console.log(songs); //prints array of top 100 songs
      // console.log(songs[randomNum]);
      var magicSongObj = songs[randomNum];
      // magicSongTitle = magicSongObj.title;
      // magicSongArtist = magicSongObj.artist;
      magicSongTitle = "paradise";
      magicSongArtist = "coldplay"

      // res.render('game', { title: 'Express' , title:magicSongTitle, artist: magicSongArtist});
    });
    lyrics.getLyrics('Drake', 'Hotline Bling', function(err, lyrics) {
      console.log(err || lyrics);
    });
    res.render('game', { title: 'Express' , title:magicSongTitle, artist: magicSongArtist});
  // }
});

router.get('/writing', function(req, res, next) {
  res.render('writing', { title: 'Express' });
});

router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Express' });
});

router.get('/pilot', function(req, res, next) {
  res.render('pilot', { title: 'Express' });
});

module.exports = router;
