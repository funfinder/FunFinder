var request = require('request');

module.exports = {
  getAll: function(req, res, next) {

    var date = req.query.dt.slice(0,11)

    request('http://data.tmsapi.com/v1.1/movies/showings?startDate=' + date + '&zip=' + req.query.location + '&api_key=4d9qk2nptvxkfg2bydfhrdrn', function(error, response, body) {
      console.log(error);

        console.log('return result',response.statusCode);
      if(!error && response.statusCode === 200) {
        var movieArray = [];
        var convertTime = function(time) {
          var hours = time.slice(0,2);
          var minutes = time.slice(2);
          if (hours > 12) {
            hours = hours - 12;
            return hours + minutes + "pm";
          }
          return hours + minutes + "am";
        }

        body = JSON.parse(body)

        //take max of 5 movies from the response and put into a movieArray
        for (var i = 0; i < 5; i++) {
          var movie = {};
          var description = body[i].shortDescription || "no description available";
          var convertedTime = convertTime(body[i].showtimes[0].dateTime.slice(11))
          movie.title = body[i].title;
          movie.description = description;
          movie.theatre = body[i].showtimes[0].theatre.name;
          movie.time = convertedTime;

          movieArray.push(movie);
        }

        // console.log("this is the response from the server", body)
        res.send(movieArray)
      }
    })
  }
}

