var express = require('express');
var router = express.Router();
var controller = require('./volunteerController.js');

//if getAll is called on this router, call getAll method in controller (defined above)
router.route('/getAll')
  .get(controller.getAll)

router.route('/getOne')
  .get(controller.getOne)
//
module.exports = router;
