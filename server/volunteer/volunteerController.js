//get function executes GET request similar to others

var request=require('request');
// app.set('view engine', 'html');

module.exports = {
  getAll: function (req, res, next) {
    // res.send("getAll function was called");
    request('https://api.stubhub.com/catalog/events/v1/4131400/metadata/inventoryMetaDatav', function(error, response, body) {
      //if there is no error and the response is a 200:
      if (!error && response.statusCode === 200) {
        body.JSON.parse(body);
        //create one large array to push sub arrays into
        var volOpportunities = [];
        //iterate thru body, whatever format data is in
          //pull out necessary info, pushing into sub array
          //once all desired data is gathered in sub array, push to subArray volOpportunities array


      //this will invoke angular magic and send volOpportunities out to the angular spirits to make available for public side volunteerService.js to pick up and work with
      res.send(volOpportunities);
      }
    })
  }
  
  // getOne: function (req, res, next) {
  //   res.send("getOne function was called.");
  //   request();
  // }
}





