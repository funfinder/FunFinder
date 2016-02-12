var request = require('request')

//add methods I might need

//call the api here
//give the response from the api to the model on the public side

module.exports = {
  getAll: function(req, res, next) {
    console.log("getAll is working!")
    request('http://data.tmsapi.com/v1.1/movies/showings?startDate=2016-02-12&zip=78701&api_key=4d9qk2nptvxkfg2bydfhrdrn', function(error, response, body) {
      if(!error && response.statusCode === 200) {
        console.log("this is the response from the server", body)
        // res.send(body[0].title)
      }
    })
  }
}

