// router.js

var Entries = require('./entries');
var HomeView = require('./home_view');
// var EntryList = require('./components/entry_list.jsx');

module.exports = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  
  index: function() {
    // console.log('index');
    var entries = new Entries();
    var homeView = new HomeView({collection: entries});

    // var entryList = React.createElement(EntryList, {collection: entries});
    // React.render(entryList, document.getElementById('home'));

    // load entries!
    entries.fetch();
  }
  
});
