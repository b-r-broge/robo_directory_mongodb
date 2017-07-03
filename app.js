'use strict'

const express = require('express');
const app = express();
const mustache = require('mustache-express');
const robots = require('./data.js');
app.engine('mustache', mustache());
app.set('views', './public');
app.set('view engine', 'mustache');
app.use(express.static(__dirname));

app.get('/directory/', function(req, res) {
  // return full homepage
  console.log('access homepage');
  res.render('index.mustache', robots);
});

app.get('/directory/:username', function(req, res) {
  // return user profile
  console.log('access username:', req.params.username);
  var userProfile = robots.users.find(function(x) {
    return x.username === req.params.username
  });
// console.log(userProfile);
  res.render('user.mustache', userProfile);
});

app.listen(3000, function() {
  console.log("Express server started");
});
