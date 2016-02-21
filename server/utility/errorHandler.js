
var express = require('express');

module.exports = function(app) {

  app.use(logErrors);
  app.use(errorHandler);

  function logErrors(err, req, res, next) {
    console.log(err.stack);
    next(err);
  }

  function errorHandler(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
  }
};