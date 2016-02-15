// var express = require('express');
// var router = express.Router();
var controller = require('./volunteerController.js');

module.exports = function(router) {
  console.log("in volunteer routes");
  router.get('/getAll', controller.getAll);
}


// /* GET users listing. */
// router.route('/')
//   .get(function(req, res, next) {
//   console.log('Volunteer Module'+req.url)
//   res.send('Volunteer Module');
// });

// //if getAll is called on this router, call getAll method in controller (defined above)
// router.route('/getAll')
//   .get(controller.getAll)




// // router.route('/getOne')
// //   .get(controller.getOne)
// //
// module.exports = router;
