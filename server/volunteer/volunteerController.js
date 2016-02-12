//get function executes GET request similar to others

var request=require('request');

module.exports = {

  getAll: function (req, res, next) {

    request('http://www.stage.volunteermatch.org/api/call?action=helloWorld', {
      'auth': {
        'user': 'FunFinder',
        'pass': '',
        'sendImmediately': false
      }
    },function(error, response, body) {

      console.log(error);
      console.log(body);
      res.send("getAll function was called");
    })
  },

  getOne: function (req, res, next) {
    res.send("getOne functino was called. BAM!");
    request();
  }
}