/** @jsx React.DOM */

var classSet = React.addons.classSet;

var ProgressGroup = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <div className='progress' style={{background: this.props.background || null}}>
        {this.props.children}
      </div>
    );
  }
});

var Progress = React.createClass({
  propTypes: {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number,

    stack: React.PropTypes.bool,
    active: React.PropTypes.bool,

    info: React.PropTypes.bool,
    danger: React.PropTypes.bool,
    success: React.PropTypes.bool,
    warning: React.PropTypes.bool,
    striped: React.PropTypes.bool,
    withLabel: React.PropTypes.bool,

    color: React.PropTypes.string,
    background: React.PropTypes.string
  },
  getInitialState: function() {
    return {
      min: this.props.min || 0,
      max: this.props.max || 100,
      value: this.props.value || 0
    };
  },
  setValue: function(value) {
    this.state.value = value;
    this.setState(this.state);
  },
  getValue: function() {
    return this.state.value;
  },
  setMin: function(min) {
    this.state.min = min;
    this.setState(this.state);
  },
  getMin: function() {
    return this.state.min;
  },
  setMax: function(max) {
    this.state.max = max;
    this.setState(this.state);
  },
  getMax: function() {
    return this.state.max;
  },
  render: function() {
    var classes = classSet({
      'progress-bar': true,
      'active': this.props.active,
      'progress-bar-info': this.props.info,
      'progress-bar-danger': this.props.danger,
      'progress-bar-success': this.props.success,
      'progress-bar-warning': this.props.warning,
      'progress-bar-striped': this.props.striped
    });

    var suffix = '';
    for(var prop in this.props) {
      switch(prop) {
        case 'info':
        case 'danger':
        case 'success':
        case 'warning':
          suffix = ' ('+prop+')';
        break;
        default:
        break;
      }
    }

    var child = <span className='sr-only'>{this.state.value}% Complete{suffix}</span>;
    if(this.props.withLabel)
      child = <span>{this.state.value}%</span>;

    var bar = (
      <div className={classes} role='progressbar' aria-valuenow={this.state.value} aria-valuemin={this.state.min} aria-valuemax={this.state.max} style={{width: this.state.value+'%', background: this.props.color || null, minWidth: this.props.minWidth}}>
        {child}
      </div>
    );

    if(this.props.stack)
      return this.transferPropsTo(bar);

    return this.transferPropsTo(
      <ProgressGroup>
        {bar}
      </ProgressGroup>
    );
  }
});

module.exports.Progress = Progress;
module.exports.ProgressGroup = ProgressGroup;
