//var express = require('express');
//var app = express();
//var router = express.Router();
//router

/* GET users listing. */

var bodyParser = require('body-parser');

module.exports = function (app, express) {

app.use(bodyParser.json());
app.use(express.static(__dirname+'../../public'));

var entertainRouter = express.Router();
var volunteerRouter = express.Router();
var socialRouter = express.Router();

app.use('/entertain', entertainRouter);
app.use('/volunteer', volunteerRouter);
app.use('/social',socialRouter);
  
// require('../entertain/entertainRoutes.js')(entertainRouter);
require('../volunteer/volunteerRoutes.js')(volunteerRouter);
// require('../social/socialRoutes.js')(socialRouter);

}

// var entertainRouter = require('../entertain/entertainRoutes.js');
// var volunteerRouter = require('../volunteer/volunteerRoutes.js');
// var socialRouter = require('../social/socialRoutes.js');

// module.exports = router;