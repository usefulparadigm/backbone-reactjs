// main.js

var Router = require('./router');

$(function() {
  var router = new Router();
  Backbone.history.start();
});