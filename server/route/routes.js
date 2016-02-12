var express = require('express');
var router = express.Router();
//router
var entertainRouter = require('../entertain/entertainRoutes.js');
var volunteerRouter = require('../volunteer/volunteerRoutes.js');
var socialRouter = require('../social/socialRoutes.js');

/* GET users listing. */
router.use('/entertain', entertainRouter);
router.use('/volunteer', volunteerRouter);
router.use('/social',socialRouter);

module.exports = router;