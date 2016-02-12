//get function executes GET request similar to others

var request=require('request');
// app.set('view engine', 'html');

module.exports = {
  getAll: function (req, res, next) {
    // res.send("getAll function was called");
    request('https://api.stubhub.com/catalog/events/v1/4131400/metadata/inventoryMetaData', function(error, response, body) {
      if (!error && response.statusCode === 200) {
        //do something with body, for now we'll console.log
        console.log("wooooo");
        res.send(body);
      }
      else {
        console.log("fail");
      }
    })
  }
  
  // getOne: function (req, res, next) {
  //   res.send("getOne function was called.");
  //   request();
  // }
}



