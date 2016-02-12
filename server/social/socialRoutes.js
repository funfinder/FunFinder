var express = require('express');
var router = express.Router();
var controller=require('./socialController')
/* GET users listing. */
router.route('/getAll')
  .get(controller.getAll());

module.exports = router;
