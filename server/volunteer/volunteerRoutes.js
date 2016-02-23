
var controller = require('./volunteerController.js');

module.exports = function(router) {
  router.get('/getAll', controller.getAll);
}
