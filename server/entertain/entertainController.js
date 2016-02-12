var request = require('request')

//add methods I might need

//call the api here
//give the response from the api to the model on the public side

module.exports = {
  getAll: function(req, res, next) {
    console.log("get all is working!")
    request('http://www.theonion.com', function(error, response, body) {
      if(!error && response.statusCode === 200) {
        console.log("this is the response from the server", body)
      }
    })
  }
}