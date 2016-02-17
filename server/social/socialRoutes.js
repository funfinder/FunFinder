var controller=require('./socialController')
/* GET users listing. */


//#Modify to use Dependency Injection from route.js
module.exports = function(router) {
  router.get('/byDate/:begin-end',controller.getAllByDate);
  router.get('/byPlace/:zipcode-radius',controller.getAllByPlace);
  router.get('/byGroup/:groupname',controller.getAllByGroup);
}