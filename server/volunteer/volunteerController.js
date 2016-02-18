
var request=require('request');


module.exports = {

  getAll: function (req, res, next) {
    console.log('volunteer getAll called')
    request('https://www.eventbriteapi.com/v3/events/search/?token=YGAXTF3CVBJD74VGIJVL&q=%22volunteer%22&location.address=%22San%20Francisco%22', function(error, response, body) {
      if (!error && response.statusCode === 200) {
        var output = [];
        body = JSON.parse(body);

        for (var i = 0; i < 6; i++) {
          output.push("EVENT " + i);
          //push name of event to output array
           output.push(body.events[i]["name"]["text"]);

           //function to shorten descritions
              var textShortener = function(x) {          
               var clippedText = "";
               for (var i = 0; i < 200; i++) {
                clippedText= clippedText + x[i];
               }
               clippedText = clippedText+"...";
               return clippedText;
             };
             //push first 200 characters of description to output
          var description = textShortener(body.events[i]["description"]["text"]);
          //descriptions from EventBrite have \n's sprinkled in, the below line will remove these
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
            var dateAndTime = body.events[i]["start"]["local"];
            var date = dateAndTime.slice(0, 10);
            var time = dateAndTime.slice(11, 16);

           output.push("Date and Time: " + date + " " + convertTime(time));

        }

      }
      res.send(output);

    })


  }

}

