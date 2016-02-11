var express = require('express');
var router = express.Router();
//router
var entertainRouter = require('../entertain/entertainRoutes.js');
var volunteerRouter = require('../social/socialRoutes.js');
var socialRouter = require('../volunteer/volunteerRoutes.js');

/* GET users listing. */
router.use('/entertain', entertainRouter);
router.use('/volunteer', volunteerRouter);
router.use('/social',socialRouter);

module.exports = router;