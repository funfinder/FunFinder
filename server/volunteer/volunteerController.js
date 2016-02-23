
var request=require('request');

module.exports = {

  getAll: function (req, res, next) {
    req.query;
//the below request incorporates googleMaps API to convert zip code (input) into a city, since this API doesn't have a query for zip codes
    request('http://maps.googleapis.com/maps/api/geocode/json?address='+req.query.location+'&sensor=true',function(error, response, body){
        if (!error && response.statusCode === 200) {
          body = JSON.parse(body);
          address = body.results[0].address_components[1].long_name;

    var APIcall = "https://www.eventbriteapi.com/v3/events/search/?token=YGAXTF3CVBJD74VGIJVL&q=%22volunteer%22&location.address=%"
    APIcall = APIcall+address;

    request (APIcall,
    // request('https://www.eventbriteapi.com/v3/events/search/?token=YGAXTF3CVBJD74VGIJVL&q=%22volunteer%22&location.address=%22San%20Francisco%22',

    function(error, response, volBody) {

      if (!error && response.statusCode === 200) {
        var volOpsArray = [];
        volBody = JSON.parse(volBody);
        var result =[];
        for (var i = 0; i < 5; i++) {
          var output = [];

          //push name of event to output array
          if (volBody.events !== undefined)
          {
            result = volBody.events;
          }
          else if (volBody.top_match_events !== undefined)
          {
            result =volBody.top_match_events;
          }

          output.push(result[i]["name"]["text"]);

           //function to shorten descritions
              var textShortener = function(x) {
              if (x === " ") {
                console.log("no text");
                return "";
              }
               var clippedText = "";
               for (var i = 0; i < 200; i++) {
                clippedText= clippedText + x[i];
               }
               clippedText = clippedText+"...";
               return clippedText;
             };
             //push first 200 characters of description to output

          var description = textShortener(result[i]["description"]["text"]);
          // descriptions from EventBrite have \n's sprinkled in, the below line will remove these
          description = description.replace(/(\r\n|\n|\r)/gm,"");
          output.push(description);

           //push start time of event to output

          //the below code is converting the date+time string the API is returning into a more friendly version of both
          var convertTime = function(time) {
              var hours = time.slice(0,2);
              var minutes = time.slice(2);
              if (hours > 12) {
                hours = hours - 12;
                return hours + minutes + "pm";
              }
              return hours + minutes + "am";
          }
            var dateAndTime = result[i]["start"]["local"];
            var date = dateAndTime.slice(0, 10);
            var time = dateAndTime.slice(11, 16);

           output.push("Date and Time: " + date + " " + convertTime(time));
           volOpsArray.push(output);
        }

      }
      res.send(volOpsArray);

    })
      }
    })
  }

}

