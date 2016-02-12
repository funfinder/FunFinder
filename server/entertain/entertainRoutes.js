var express = require('express');
var router = express.Router();
var controller = require('./entertainController.js');


/* GET users listing. */
router.route('/')
  .get(function(req, res, next) {
  console.log('Entertainment Module'+req.url)
  res.send('Entertainment Module');
});

router.route('/getAll')
  .get(controller.getAll)

module.exports = router;
