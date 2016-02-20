
var express = require('express');
var app = express();
var routes = require('./server/route/routes');

var port = process.env.PORT || 5000;

routes(app)
app.listen(port,function(){
  console.log('Server Established. Running on port '+port);
})


