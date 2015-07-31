// entry_item.jsx

var EntryItem = React.createClass({

  handleClick: function(event) {
    console.log(this.props.model);
    this.props.model.destroy({
      success: function() { console.log('deleted!'); }
    });
  },
  
  render: function() {
    var title = this.props.model.get('title');
    return (
      <li className="list-group-item">
        {title}
        <a href="#" onClick={this.handleClick}><i className="x glyphicon glyphicon-remove-sign"></i></a>
      </li>
    );
  }
  
});

module.exports = EntryItem;