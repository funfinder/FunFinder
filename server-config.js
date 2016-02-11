var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.all('/*',function(req,res,next){
  console.log(req.method,'Request for URL',req.url)
  next();
});

app.use('/', express.static(__dirname + '/public/'));



module.exports  = app;