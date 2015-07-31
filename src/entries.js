// entries.js

var Entry = require('./entry');

var Entries = Backbone.Collection.extend({
  model: Entry,
  url: 'http://localhost:3000/entries',

  // http://stackoverflow.com/questions/5013819/reverse-sort-order-with-backbone-js
  comparator: function(entry) {
    return -entry.get('id');
  }
  
});

module.exports = Entries;