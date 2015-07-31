// entry_form.jsx

var NewEntryForm = React.createClass({

  handleSubmit: function(e) {
    e.preventDefault();
    var title = React.findDOMNode(this.refs.title).value.trim();
    if (!title) {
      return;
    }
    // save the entry
    this.props.collection.create({title: title});
    React.findDOMNode(this.refs.title).value = '';
    return;
  },

  render: function() {
    return(
        <form className="entry-form form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter a new entry.." ref="title" />
          </div>
          <button type="submit" className="btn btn-primary btn-block">Save</button>
        </form>
    );
  }
  
});

module.exports = NewEntryForm;