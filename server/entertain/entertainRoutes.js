// var express = require('express');

var controller = require('./entertainController.js');


/* GET users listing. */
//#Modify to use Dependency Injection from route.js

module.exports = function(router) {

  router.get('/',function(req, res, next) {
    console.log('Entertainment Module'+req.url)
    res.send('Entertainment Module');
  });

  router.get('/getAll', controller.getAll);

}