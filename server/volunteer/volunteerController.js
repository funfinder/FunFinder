var request=require('request');

module.exports = {

  getAll: function (req, res, next) {
    req.query;
//the below request incorporates googleMaps API to convert zip code (input) into a city, since this API doesn't have a query for zip codes
    request('http://maps.googleapis.com/maps/api/geocode/json?address='+req.query.location+'&sensor=true',function(error, response, body){
        if (!error && response.statusCode === 200) { 
          body = JSON.parse(body);
          address = body.results[0].address_components[1].long_name;

    //use our API call with the address (city) extracted from the googleMaps API (above) to make the API call
    var APIcall = "https://www.eventbriteapi.com/v3/events/search/?token=YGAXTF3CVBJD74VGIJVL&q=%22volunteer%22&location.address=%"
    APIcall = APIcall+address;

    request (APIcall, 
    // request('https://www.eventbriteapi.com/v3/events/search/?token=YGAXTF3CVBJD74VGIJVL&q=%22volunteer%22&location.address=%22San%20Francisco%22', 

    function(error, response, volBody) {

      if (!error && response.statusCode === 200) {
        var volOpsArray = [];
        volBody = JSON.parse(volBody);
        //only list 5 volunteer opportunities
        for (var i = 0; i < 5; i++) {
          var output = [];
          //push name of event to output array
         output.push(volBody.top_match_events[i]["name"]["text"]);

           //function to shorten descritions (cuts description to 200 characters)
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

          var description = textShortener(volBody.top_match_events[i]["description"]["text"]);
          // descriptions from EventBrite have \n's sprinkled in, the below line will remove these
          description = description.replace(/(\r\n|\n|\r)/gm,"");
          //push shortened, edited description into output array
          output.push(description);

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
            var dateAndTime = volBody.top_match_events[i]["start"]["local"];
            var date = dateAndTime.slice(0, 10);
            var time = dateAndTime.slice(11, 16);
            //push pretty date and time to output
           output.push("Date and Time: " + date + " " + convertTime(time));
           //now that title, shortened description, and date/time are all there, push entire thing to volOpsArray. This will happen 5 times to push 5 events to the final array.
           volOpsArray.push(output);
        }

      }
      res.send(volOpsArray);

    })
      }
    })
  }

}

