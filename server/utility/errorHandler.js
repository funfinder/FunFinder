var express = require('express');

module.exports = function(app) {

  app.use()



  function logErrors(err, req, res, next) {
    console.log(err.stack);
    next(err);
  }

  function errorHandler(err, req, res, next) {

  }

}
