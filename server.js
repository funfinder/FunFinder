
var express = require('express');
var app = express();
var routes = require('./server/route/routes');
var errorHandler = require('./server/utility/errorHandler')

errorHandler(app);
routes(app)
var port = process.env.PORT || 5000;

app.listen(port,function(){
  console.log('Server Established. Running on port '+port);
})


