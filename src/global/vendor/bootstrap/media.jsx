/** @jsx React.DOM */

var MediaBody = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <div className='media-body'>
        {this.props.children}
      </div>
    );
  }
});

var Media = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <li className='media'>
        {this.props.children}
      </li>
    );
  }
});

var MediaList = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <ul className='media-list'>
        {this.props.children}
      </ul>
    );
  }
});

module.exports.Media = Media;
module.exports.MediaBody = MediaBody;
module.exports.MediaList = MediaList;
