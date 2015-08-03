// entry_list.jsx

var EntryItem = require('./entry_item.jsx');
var EntryForm = require('./entry_form.jsx');

var EntryList = React.createClass({

  componentDidMount: function() {
    // explicitly bind `null` to `forceUpdate`, as it demands a callback and
    // React validates that it's a function. `collection` events passes
    // additional arguments that are not functions
    this.props.collection.on('add remove change', this.forceUpdate.bind(this, null));
  },

  componentWillUnmount: function () {
    // Ensure that we clean up any dangling references when the component is
    // destroyed.
    this.props.collection.off(null, null, this);
  },
  
  render: function() {
    return (
      <div className="entry-list">
        <h1>Listing Entries</h1>
        <EntryForm collection={this.props.collection} />
        <hr />
        <ul className="entries list-group">
        {this.props.collection.sort().map(function(entry) {
          // return <li className="list-group-item" key={entry.cid}>{entry.get('title')}</li>;
          return <EntryItem key={entry.cid} model={entry} />;
        })}
        </ul>
      </div>
    );
  }
});

module.exports = EntryList;