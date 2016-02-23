var express = require('express');
//var app = express();
//var router = express.Router();
//router

/* GET users listing. */
var path = require('path');

var bodyParser = require('body-parser');

module.exports = function (app) {

app.all('/*',function(req,res,next){
  console.log(req.method,'Request for URL ',req.url)
  next();
});
console.log(__dirname)
app.use(bodyParser.json());
app.use(express.static(__dirname+'../../../public'));

var entertainRouter = express.Router();
var volunteerRouter = express.Router();
var socialRouter = express.Router();

app.use('/entertain', entertainRouter);
app.use('/volunteer', volunteerRouter);
app.use('/social',socialRouter);

require('../entertain/entertainRoutes.js')(entertainRouter);
require('../volunteer/volunteerRoutes.js')(volunteerRouter);
require('../social/socialRoutes.js')(socialRouter);

}
