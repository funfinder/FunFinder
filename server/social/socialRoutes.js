var controller=require('./socialController')
/* GET users listing. */


//#Modify to use Dependency Injection from route.js
module.exports = function(router) {
  router.get('/byDatesPlace/:begin-end/zip-radius',controller.getAllByDatesPlace);
  router.get('/byDatesGroup/:begin-end/groupname',controller.getAllByDatesGroup);
}