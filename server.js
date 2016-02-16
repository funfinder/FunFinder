
var express = require('express');
var app = express();
var routes = require('./server/route/routes');

routes(app)
var port = process.env.PORT || 5000;

app.listen(port,function(){
  console.log('Server Established. Running on port '+port);
})