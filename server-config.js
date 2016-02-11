var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var routes = require('./server/route/routes')

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Basic logging for all request
app.all('/*',function(req,res,next){
  console.log(req.method,'Request for URL ',req.url)
  next();
});

//public folder exposing to user
app.use('/', express.static(__dirname + '/public/'));

//Server side routing
app.use('/',routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports  = app;