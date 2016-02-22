var controller=require('./socialController');

/* GET users listing. */


//#Modify to use Dependency Injection from route.js
module.exports = function(router) {
  console.log("in social routes");
 // router.get('/:city/:state/:beginTime/:endTime',controller.getAll);
  router.get('/:zip/:beginTime/:endTime',controller.getAllZip);
}