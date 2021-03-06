var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

var pantry = require('../database-mysql');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../react-client/dist'));

app.use(session({
  secret: 'keyboard cat'
}));



app.get('/', function(req, res) {
  console.log(req.session);
});

app.get('/users', function (req, res) {
  pantry.getUsers(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get('/recipes', function(req, res) {
  pantry.getRecipes(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  })
});

app.get('/users_recipes', function(req, res) {
  pantry.getUsersRecipes(function(err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  })
});

app.post('/login', function(req, res, next) {
  console.log('POST: login');
  console.log(req.body);
  req.session.username = req.body.username;
  req.session.password = req.body.password;
  res.send(req.session.username);
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
