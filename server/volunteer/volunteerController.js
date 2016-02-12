//get function executes GET request similar to others

var request=require('request');

module.exports = {

  getAll: function (req, res, next) {
    res.send("getAll function was called");
    request('http://wwww.google.com', function(error, response, body) {
      if (!error && response.statusCode === 200) {
        //do something with body, for now we'll console.log
        console.log("wooooo");
        console.log(body);
      }
      else {
        console.log("epic fail");
      }
    })
  },
  
  getOne: function (req, res, next) {
    res.send("getOne functino was called. BAM!");
    request();
  }
}