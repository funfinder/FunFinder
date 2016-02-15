//get function executes GET request similar to others

var request=require('request');
var http = require('http');
// var wsse = require('wsse');

// app.set('view engine', 'jade');


// GET /api/call?action=helloWorld&query=... HTTP/1.1

var headers = {
    'Host': 'www.volunteermatch.org',
    'Accept-Charset': 'UTF-8',
    'Content-Type': application/json,
    'Authorization': 'WSSE profile="UsernameToken"',
    'X-WSSE':'UsernameToken Username="FunFinder",
    PasswordDigest="quR/EWLAV4xLf9Zqyw4pDmfV9OY=", Nonce=
    "3d711ec9bee2f445ac2292726d7ea854", Created="2003-12-15T14:43:07-0700"'

};

var options = {
    headers: headers,
    action: 'helloWorld',
    query: "{\"name\":\"john\"}",

};

// var token = wsse({ username: 'FunFinder', password: '3d711ec9bee2f445ac2292726d7ea854' });

// console.log(token.getUsername());

module.exports = {
  getAll: function (req, res) {
      http.get(options, function(res) {
        if (!error && response.statusCode === 200) {
          console.log("res.body is ", res.body);
          res.send(res);
        }
        else { res.send('fail')}
  })
}
}


//test request to google
//   request('http://www.google.com', function (error, response, body) {
//   if (!error && response.statusCode == 200) {
//     console.log("working!")
//     res.send("it worked");
//   }
//   else {
//     res.send("fail");
//   }
// })
// }
// }
//     request('http://www.stage.volunteermatch.org/api/call?action=getMetadata', function(error, response, body) {
//       //if there is no error and the response is a 200:
//       if (!error && response.statusCode === 200) {
//         body = JSON.parse(body);
//         console.log(body);
//         //create one large array to push sub arrays into
//         //var volOpportunities = [];
//         //iterate thru body, whatever format data is in
//           //pull out necessary info, pushing into sub array
//           //once all desired data is gathered in sub array, push to subArray volOpportunities array


//       //this will invoke angular magic and send volOpportunities out to the angular to make available for public side volunteerService.js to pick up and work with
//       //res.send(volOpportunities);
//       }
//     },function(error, response, body) {
//       console.log(error);
//       console.log(body);
//       res.send("getAll function was called");
//     });
//   }
// }





