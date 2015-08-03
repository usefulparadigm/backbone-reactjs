// home_view.js

var EntryList = require('./components/entry_list.jsx');

var HomeView = Backbone.View.extend({
  el: '#home',

  initialize: function() {
    // this.listenTo(this.collection, 'sync', this.render);
    this.render();
  },
  
  render: function() {
    var entryList = React.createElement(EntryList, {collection: this.collection});
    React.render(entryList, this.el);
    return this;
  }
});

module.exports = HomeView;