var app = require('./server-config.js');

var port = process.env.PORT || 5000;

app.listen(port,function(){
  console.log('Server Established. Running on port '+port);
})