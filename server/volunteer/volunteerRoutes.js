var express = require('express');
var router = express.Router();

/* GET users listing. */
router.route('/')
  .get(function(req, res, next) {
  console.log('Volunteer Module')
  res.send('Volunteer Module');
});
module.exports = router;
