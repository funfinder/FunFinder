
var request=require('request');


module.exports = {

  getAll: function (req, res, next) {
    console.log('volunteer getAll called')
    request('https://www.eventbriteapi.com/v3/events/search/?token=YGAXTF3CVBJD74VGIJVL', function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var output = [];
        body = JSON.parse(body);

        for (var i = 0; i < 5; i++) {
           output.push(body.events[i]["name"]["text"]);
        }

      }
      res.send(output);

    })


  }

}


