/** @jsx React.DOM */

var classSet = React.addons.classSet;

var TabPane = React.createClass({
  listName: null,
  paneName: null,
  propTypes: {
    ref: React.PropTypes.string.isRequired
  },
  getInitialState: function() {
    return {
      active: this.props.active || false
    };
  },
  stateChangeCallback: function(paneName) {
    if(this.paneName === paneName) {
      this.setState({active: true});
    } else {
      this.setState({active: false});
    }
  },
  componentDidMount: function() {
    ReactBootstrap.Dispatcher.on('tab:'+this.listName, this.stateChangeCallback);
  },
  componentWillUnmount: function() {
    ReactBootstrap.Dispatcher.off('tab:'+this.listName, this.stateChangeCallback);
  },
  render: function() {
    var pane_str = this.props.ref.split(':');
    this.listName = pane_str[0];
    this.paneName = pane_str[1];

    var classes = classSet({
      'tab-pane': true,
      'active': this.state.active
    });

    return this.transferPropsTo(
      <div ref='pane' className={classes} active={null}>
        {this.props.children}
      </div>
    );
  }
});

var TabContent = React.createClass({
  render: function() {
    var classes = classSet({
      'tab-content': true
    });

    return this.transferPropsTo(
      <div className={classes.trim()}>
        {this.props.children}
      </div>
    );
  }
});

var Tab = React.createClass({
  listName: null,
  paneName: null,
  propTypes: {
    pane: React.PropTypes.string,
    disabled: React.PropTypes.bool
  },
  getInitialState: function() {
    return {
      active: this.props.active || false
    };
  },
  handleRawClick: function(e) {
    if(this.props.disabled) return;
    this.state.active = !this.state.active;
    this.setState(this.state, function() {
      if(this.props.dropdown) {
        var node = $(this.refs.div.getDOMNode());
        node.parents('li[role=presentation]').addClass('active');
      }
      ReactBootstrap.Dispatcher.emit('tab:'+this.listName, this.paneName);
    }.bind(this));
  },
  handleClick: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.handleRawClick();
  },
  stateChangeCallback: function(paneName) {
    if(this.paneName === paneName) {
      this.setState({active: true}, function() {
        $(window).trigger('rubix.redraw');
        if(!this.props.dropdown) {
          var node = $(this.refs.li.getDOMNode());
          node.siblings('.active').removeClass('active');
        }
      }.bind(this));
    } else {
      this.setState({active: false});
      if(this.props.dropdown) {
        var node = $(this.refs.div.getDOMNode());
        node.parents('li[role=presentation]').removeClass('active');
      }
    }
  },
  componentDidMount: function() {
    ReactBootstrap.Dispatcher.on('tab:'+this.listName, this.stateChangeCallback);
  },
  componentWillUnmount: function() {
    ReactBootstrap.Dispatcher.off('tab:'+this.listName, this.stateChangeCallback);
  },
  render: function() {
    if(this.props.hasOwnProperty('pane')) {
      var pane_str = this.props.pane.split(':');
      this.listName = pane_str[0];
      this.paneName = pane_str[1];
    }

    var classes = classSet({
      'b-tab': true,
      'active': this.state.active,
      'dropdown': this.props.dropdown,
      'disabled': this.props.disabled
    });
    if(this.props.dropdown) {
      return this.transferPropsTo(
        <div ref='div' className='div-b-tab' onClick={this.handleClick} onTouchEnd={this.handleClick}>{this.props.children}</div>
      );
    }
    if(!this.props.hasOwnProperty('pane')) {
      return this.transferPropsTo(
        <li ref='li' className='b-tab'>{this.props.children}</li>
      );
    }
    return this.transferPropsTo(
      <li ref='li' className={classes} active={null}>
        <a href='#' role='tab' data-toggle='tab' onClick={this.handleClick} onTouchEnd={this.handleClick}>{this.props.children}</a>
      </li>
    );
  }
});

var TabList = React.createClass({
  propTypes: {
    pills: React.PropTypes.bool,
    stacked: React.PropTypes.bool,
    justified: React.PropTypes.bool,
    bsStyle: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      bsStyle: 'default'
    };
  },
  render: function() {
    var isPills = this.props.pills ? true : false;
    var isStacked = this.props.stacked ? (
                      this.props.pills ? true : false
                    ) : false;
    var classesObj = {
      'nav': true,
      'nav-tabs': !isPills,
      'nav-pills': isPills,
      'nav-stacked': isStacked,
      'nav-justified': this.props.justified
    };

    var bsStyles=this.props.bsStyle.split(',');
    for(var i=0; i < bsStyles.length; i++) {
      classesObj['nav-'+bsStyles[i].trim()] = true;
    }

    var classes = classSet(classesObj);

    var tablist = classSet({
      'tablist': !isPills ? true : false
    });
    return this.transferPropsTo(
      <ul className={classes} role={tablist}>
        {this.props.children}
      </ul>
    );
  }
});

var TabContainer = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <div className='tab-container'>
        {this.props.children}
      </div>
    );
  }
});

module.exports.Tab = Tab;
module.exports.TabList = TabList;
module.exports.TabPane = TabPane;
module.exports.TabContent = TabContent;
module.exports.TabContainer = TabContainer;
