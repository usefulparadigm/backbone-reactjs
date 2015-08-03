// router.js

var Entries = require('./entries');
var HomeView = require('./home_view');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  
  index: function() {
    // console.log('index');
    var entries = new Entries();
    var homeView = new HomeView({collection: entries});

    // load entries!
    entries.fetch();
  }
  
});
