/** @jsx React.DOM */

var classSet = React.addons.classSet;
var ListGroupItem = React.createClass({
  propTypes: {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    bsStyle: React.PropTypes.string
  },
  render: function() {
    var classesObj = {
      'list-group-item': true,
      'active': this.props.active,
      'disabled': this.props.disabled
    };

    if(this.props.bsStyle) {
      var bsStyles=this.props.bsStyle.split(',');
      for(var i=0; i < bsStyles.length; i++) {
        classesObj['list-group-'+bsStyles[i].trim()] = true;
      }      
    }

    var classes = classSet(classesObj);

    return this.transferPropsTo(
      <RRouter.Link href='#' className={classes}>
        {this.props.children}
      </RRouter.Link>
    );
  }
});

var ListGroup = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <div className='list-group'>
        {this.props.children}
      </div>
    );
  }
});

module.exports.ListGroup = ListGroup;
module.exports.ListGroupItem = ListGroupItem;
