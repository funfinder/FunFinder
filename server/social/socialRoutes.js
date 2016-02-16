var controller=require('./socialController')
/* GET users listing. */


//#Modify to use Dependency Injection from route.js
module.exports = function(router) {
  router.get('/',controller.getAll);
}