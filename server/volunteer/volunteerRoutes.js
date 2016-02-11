var express = require('express');
var router = express.Router();

/* GET users listing. */
router.route('/')
  .get(function(req, res, next) {
  console.log('Entertainment Module')
  res.send('Entertainment Module');
});
module.exports = router;
