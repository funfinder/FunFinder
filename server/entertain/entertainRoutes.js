var express = require('express');
var router = express.Router();

/* GET users listing. */
router.route('/')
  .get(function(req, res, next) {
  console.log('Entertainment Module'+req.url)
  res.send('Entertainment Module');
});

module.exports = router;
