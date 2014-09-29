/*! rubix - v1.0.1 - 2014-09-29 [copyright: SketchPixy LLP, email: support@sketchpixy.com] */
(function() {
/*DO NOT MODIFY*/

/*RROUTER*/
var _RTR_=window.RRouter || {};
var Routes =_RTR_.Routes,
    Route=_RTR_.Route,
    Link=_RTR_.Link,
    RoutingContextMixin=_RTR_.RoutingContextMixin;

/*REACTBOOTSTRAP+EXTRAS*/
var _RB32_=window.ReactBootstrap || {};
var Container=_RB32_.Container,
    Grid=_RB32_.Grid,
    Row=_RB32_.Row,
    Col=_RB32_.Col,
    ColMixin=_RB32_.ColMixin,
    Lead=_RB32_.Lead,
    Table=_RB32_.Table,
    Form=_RB32_.Form,
    FormGroup=_RB32_.FormGroup,
    Label=_RB32_.Label,
    Input=_RB32_.Input,
    InputGroup=_RB32_.InputGroup,
    InputGroupAddon=_RB32_.InputGroupAddon,
    InputGroupButton=_RB32_.InputGroupButton,
    Checkbox=_RB32_.Checkbox,
    Radio=_RB32_.Radio,
    Button=_RB32_.Button,
    Textarea=_RB32_.Textarea,
    Select=_RB32_.Select,
    Static=_RB32_.Static,
    Icon=_RB32_.Icon,
    HelpBlock=_RB32_.HelpBlock,
    Img=_RB32_.Img,
    Caret=_RB32_.Caret,
    Dropdown=_RB32_.Dropdown,
    DropdownButton=_RB32_.DropdownButton,
    Menu=_RB32_.Menu,
    MenuItem=_RB32_.MenuItem,
    ButtonGroup=_RB32_.ButtonGroup,
    ButtonToolbar=_RB32_.ButtonToolbar,
    Tab=_RB32_.Tab,
    TabPane=_RB32_.TabPane,
    TabList=_RB32_.TabList,
    TabContent=_RB32_.TabContent,
    TabContainer=_RB32_.TabContainer,
    Nav=_RB32_.Nav,
    NavBar=_RB32_.NavBar,
    NavText=_RB32_.NavText,
    NavLink=_RB32_.NavLink,
    NavItem=_RB32_.NavItem,
    NavForm=_RB32_.NavForm,
    NavBrand=_RB32_.NavBrand,
    NavHeader=_RB32_.NavHeader,
    NavToggle=_RB32_.NavToggle,
    NavButton=_RB32_.NavButton,
    NavContent=_RB32_.NavContent,
    BLink=_RB32_.BLink,
    Breadcrumb=_RB32_.Breadcrumb,
    Page=_RB32_.Page,
    Pager=_RB32_.Pager,
    Pagination=_RB32_.Pagination,
    Badge=_RB32_.Badge,
    BLabel=_RB32_.BLabel,
    Jumbotron=_RB32_.Jumbotron,
    Progress=_RB32_.Progress,
    ProgressGroup=_RB32_.ProgressGroup,
    Media=_RB32_.Media,
    MediaDiv=_RB32_.MediaDiv,
    MediaBody=_RB32_.MediaBody,
    MediaList=_RB32_.MediaList,
    MediaObject=_RB32_.MediaObject,
    MediaHeading=_RB32_.MediaHeading,
    ListGroup=_RB32_.ListGroup,
    ListGroupItem=_RB32_.ListGroupItem,
    ListGroupItemText=_RB32_.ListGroupItemText,
    ListGroupItemHeading=_RB32_.ListGroupItemHeading,
    Well=_RB32_.Well,
    Modal=_RB32_.Modal,
    ModalBody=_RB32_.ModalBody,
    ModalHeader=_RB32_.ModalHeader,
    ModalFooter=_RB32_.ModalFooter,
    ModalManager=_RB32_.ModalManager,
    Panel=_RB32_.Panel,
    PanelBody=_RB32_.PanelBody,
    PanelHeader=_RB32_.PanelHeader,
    PanelFooter=_RB32_.PanelFooter,
    PanelLeft=_RB32_.PanelLeft,
    PanelRight=_RB32_.PanelRight,
    PanelContainer=_RB32_.PanelContainer,
    LoremIpsum=_RB32_.LoremIpsum,
    TimelineView=_RB32_.TimelineView,
    TimelineItem=_RB32_.TimelineItem,
    TimelineHeader=_RB32_.TimelineHeader,
    TimelineIcon=_RB32_.TimelineIcon,
    TimelineAvatar=_RB32_.TimelineAvatar,
    TimelineTitle=_RB32_.TimelineTitle,
    TimelineBody=_RB32_.TimelineBody,
    Accordian=_RB32_.Accordian,
    AccordianPane=_RB32_.AccordianPane,
    AccordianTitle=_RB32_.AccordianTitle,
    AccordianContent=_RB32_.AccordianContent,
    IonTabContainer=_RB32_.IonTabContainer,
    IonTabHead=_RB32_.IonTabHead,
    IonTabBody=_RB32_.IonTabBody,
    IonTab=_RB32_.IonTab,
    IonTabItem=_RB32_.IonTabItem,
    PricingTable=_RB32_.PricingTable,
    PricingFeature=_RB32_.PricingFeature,
    PricingTableBody=_RB32_.PricingTableBody,
    PricingTablePrice=_RB32_.PricingTablePrice,
    PricingTableHeader=_RB32_.PricingTableHeader,
    PricingTableContainer=_RB32_.PricingTableContainer,
    PricingButtonContainer=_RB32_.PricingButtonContainer,
    Alert=_RB32_.Alert,
    AlertLink=_RB32_.AlertLink,
    Tag=_RB32_.Tag,
    Sidebar=_RB32_.Sidebar,
    SidebarNav=_RB32_.SidebarNav,
    SidebarBtn=_RB32_.SidebarBtn,
    SidebarMixin=_RB32_.SidebarMixin,
    SidebarNavItem=_RB32_.SidebarNavItem,
    SidebarControls=_RB32_.SidebarControls,
    SidebarControlBtn=_RB32_.SidebarControlBtn,
    TransitionEndEvent='webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

/*L20N*/
var _RL20n_=window.ReactL20n;
var l20n=_RL20n_.l20n,
    Entity=_RL20n_.Entity;

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	'use strict';

	/* Initialize Locales */
	l20n.initializeLocales('demo', {
	  'locales': ['en-US', 'fr', 'it', 'ge', 'ar', 'ch'],
	  'default': 'en-US'
	});

	/* Initializing touch events */
	React.initializeTouchEvents(true);

	__webpack_require__(1);

	/* ERROR PAGES */
	var notfound = __webpack_require__(2);

	/* APP PAGES */
	var dashboard = __webpack_require__(3);
	var connectors = __webpack_require__(4);
	var apimanager = __webpack_require__(5);
	var systemperformance = __webpack_require__(6);
	var eventlogs = __webpack_require__(7);

	/* ROUTES */
	var routes = (
	  Routes(null, 
	    Route({name: "root", path: "/", view: dashboard}, 
	      Route({name: "app", path: "app"}, 
	        Route({name: "dashboard", path: "dashboard", view: dashboard}), 
	        Route({name: "connectors", path: "connectors", view: connectors}), 
	        Route({name: "api-manager", path: "api-manager", view: apimanager}), 
	        Route({name: "system-performance", path: "system-performance", view: systemperformance}), 
	        Route({name: "event-logs", path: "event-logs", view: eventlogs})
	      ), 

	      Route({name: "notfound", path: "/404", view: notfound})
	    )
	  )
	);

	Pace.once('hide', function() {
	  $('#pace-loader').removeClass('pace-big').addClass('pace-small');
	});

	var InitializeRouter = function(View) {
	  // cleanup
	  if(window.Rubix) window.Rubix.Cleanup();
	  Pace.restart();
	  if(window.hasOwnProperty('ga') && typeof window.ga === 'function') {
	    window.ga('send', 'pageview', {
	     'page': window.location.pathname + window.location.search  + window.location.hash
	    });
	  }

	  React.renderComponent(View(null), document.getElementById('app-container'), function() {
	    // l20n initialized only after everything is rendered/updated
	    l20n.ready();
	    setTimeout(function() {
	      $('body').removeClass('fade-out');
	    }, 500);
	  });
	};

	RRouter.routing = RRouter.HashRouting.start(routes, InitializeRouter);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Preloader = React.createClass({displayName: 'Preloader',
	  getInitialState: function() {
	    return {
	      display: 'none'
	    };
	  },
	  show: function(cb) {
	    this.setState({display: 'block'}, cb);
	  },
	  hide: function(cb) {
	    this.setState({display: 'none'}, cb);
	  },
	  render: function() {
	    return (
	      React.DOM.div({className: "preloader", style: {display: this.state.display}}, 
	        React.DOM.img({src: "/imgs/preloader.gif", width: "128", height: "128"})
	      )
	    );
	  }
	});

	window.Preloader = React.renderComponent(Preloader(null), document.getElementById('app-preloader'));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(8);
	var Sidebar = __webpack_require__(9);
	var Footer = __webpack_require__(10);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Grid({gutterBottom: true}, 
	          Row(null, 
	            Col({sm: 12, className: "text-center"}, 
	              PanelContainer(null, 
	                Panel(null, 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.div(null, 
	                            Icon({style: {fontSize: 288, lineHeight: 1}, glyph: "icon-mfizz-ghost"})
	                          ), 
	                          React.DOM.h1({style: {marginBottom: 25, marginTop: 0}}, "Page not found!")
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var PageNotFound = React.createClass({displayName: 'PageNotFound',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes}, 
	        Sidebar(null), 
	        Header(null), 
	        Body(null, 
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = PageNotFound;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(8);
	var Sidebar = __webpack_require__(9);
	var Footer = __webpack_require__(10);

	var Body = React.createClass({displayName: 'Body',
	  getInitialState: function() {
	    return {
	      events: [],
	      objects: []
	    };
	  },
	  handleEvents: function(e) {
	    var table = $('#example').DataTable();
	    var value = e.target.value === 'All events' ? '' : e.target.value;
	    table.column(1).search(value, true, false).draw();
	  },
	  handleObjects: function(e) {
	    var table = $('#example').DataTable();
	    var value = e.target.value === 'Select an object' ? '' : e.target.value;
	    table.column(2).search(value, true, false).draw();
	  },
	  handleObjectIDSearch: function(e) {
	    var table = $('#example').DataTable();
	    table.column(2).search(e.target.value, true, false).draw();
	  },
	  componentDidMount: function() {
	    var maxDate = 0;
	    $(this.refs.datetimepicker1.getDOMNode()).datetimepicker({
	      pickTime: false
	    }).on("dp.change",function (e) {
	      var table = $('#example').DataTable();
	      var date = e.date.format("YYYY-MM-DD");
	      table.column(0).search(date, true, false).draw();
	    });
	    $('#searchinput').off('*').on('change', function(e) {
	      if($('#searchinput').val().length) return;
	      var table = $('#example').DataTable();
	      table.column(0).search('', true, false).draw();
	    });
	    $(this.refs.icon.getDOMNode()).attr('class', 'rubix-icon icon-fontello-calendar');
	    $('#example')
	      .addClass('nowrap')
	      .DataTable({
	        responsive: true,
	        processing: true,
	        serverSide: true,
	        ajax: function(data, callback, settings) {
	          $.post('/data-source/activities', data, function(d) {
	            this.setState({
	              events: d.events,
	              objects: d.objects
	            });
	            callback(d);
	          }.bind(this));
	        }.bind(this),
	        columns: [
	          {data: 'timestamp'},
	          {data: 'process_name'},
	          {data: 'protocol'},
	          {data: 'format'},
	          {data: 'action'},
	          {data: 'status'}
	        ],
	        columnDefs: [
	          {
	            targets: [0],
	            type: 'date',
	            render: function(data, type, full) {
	              if(data){
	                  var mDate = moment(data);
	                  if (mDate && mDate.isValid()) {
	                    var d = mDate.format("lll");
	                    maxDate = Math.max(mDate.unix(), maxDate);
	                    return d;
	                  } else return "";
	              }
	              return "";
	            }
	          },
	          { targets: [-1, -2], className: 'dt-body-right' }
	        ]
	    });
	  },
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              PanelContainer(null, 
	                Panel(null, 
	                  PanelBody(null, 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          React.DOM.h3({style: {margin: 0, marginBottom: 25}}, "Filter Event History")
	                        )
	                      )
	                    ), 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 3}, 
	                          Select({onChange: this.handleEvents}, 
	                            React.DOM.option(null, "All events"), 
	                            this.state.events.map(function(ev, i) {
	                              return React.DOM.option({value: ev.process_name, key: 'event-'+i}, ev.process_name)
	                            })
	                          )
	                        ), 
	                        Col({xs: 3, collapseLeft: true}, 
	                          Select({onChange: this.handleObjects}, 
	                            React.DOM.option(null, "Select an object"), 
	                            this.state.objects.map(function(ob, i) {
	                              return React.DOM.option({value: ob.protocol, key: 'object-'+i}, ob.protocol)
	                            })
	                          )
	                        ), 
	                        Col({xs: 3, collapseLeft: true, className: "text-right"}, 
	                          Input({type: "text", placeholder: "Enter an Object ID or File Name", onChange: this.handleObjectIDSearch})
	                        ), 
	                        Col({xs: 3, collapseLeft: true}, 
	                          InputGroup({className: "date", ref: "datetimepicker1"}, 
	                            Input({id: "searchinput", type: "text", className: "form-control"}), 
	                            InputGroupAddon(null, 
	                              Icon({ref: "icon", glyph: "icon-fontello-calendar"})
	                            )
	                          )
	                        )
	                      )
	                    ), 
	                    React.DOM.hr(null), 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          Table({id: "example", className: "display", cellSpacing: "0", width: "100%"}, 
	                            React.DOM.thead(null, 
	                              React.DOM.tr(null, 
	                                React.DOM.th(null, "Timestamp"), 
	                                React.DOM.th(null, "Event"), 
	                                React.DOM.th(null, "Object"), 
	                                React.DOM.th(null, "Format"), 
	                                React.DOM.th(null, "Action"), 
	                                React.DOM.th(null, "Status")
	                              )
	                            ), 
	                            React.DOM.tfoot(null, 
	                              React.DOM.tr(null, 
	                                React.DOM.th(null, "Timestamp"), 
	                                React.DOM.th(null, "Event"), 
	                                React.DOM.th(null, "Object"), 
	                                React.DOM.th(null, "Format"), 
	                                React.DOM.th(null, "Action"), 
	                                React.DOM.th(null, "Status")
	                              )
	                            )
	                          ), 
	                          React.DOM.br(null)
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Dashboard = React.createClass({displayName: 'Dashboard',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes}, 
	        Sidebar(null), 
	        Header(null), 
	        Body(null, 
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Dashboard;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(8);
	var Sidebar = __webpack_require__(9);
	var Footer = __webpack_require__(10);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              PanelContainer(null, 
	                Panel(null, 
	                  PanelBody(null, 
	                    React.DOM.h3({className: "text-center"}, 
	                      "Connectors"
	                    ), 
	                    React.DOM.br(null)
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var Connectors = React.createClass({displayName: 'Connectors',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes}, 
	        Sidebar(null), 
	        Header(null), 
	        Body(null, 
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = Connectors;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(8);
	var Sidebar = __webpack_require__(9);
	var Footer = __webpack_require__(10);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              PanelContainer(null, 
	                Panel(null, 
	                  PanelBody(null, 
	                    React.DOM.h3({className: "text-center"}, 
	                      "API Manager"
	                    ), 
	                    React.DOM.br(null)
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var ApiManager = React.createClass({displayName: 'ApiManager',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes}, 
	        Sidebar(null), 
	        Header(null), 
	        Body(null, 
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = ApiManager;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(8);
	var Sidebar = __webpack_require__(9);
	var Footer = __webpack_require__(10);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              PanelContainer(null, 
	                Panel(null, 
	                  PanelBody(null, 
	                    React.DOM.h3({className: "text-center"}, 
	                      "System Performance"
	                    ), 
	                    React.DOM.br(null)
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var SystemPerformance = React.createClass({displayName: 'SystemPerformance',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes}, 
	        Sidebar(null), 
	        Header(null), 
	        Body(null, 
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = SystemPerformance;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Header = __webpack_require__(8);
	var Sidebar = __webpack_require__(9);
	var Footer = __webpack_require__(10);

	var Body = React.createClass({displayName: 'Body',
	  render: function() {
	    return (
	      Container({id: "body"}, 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              PanelContainer(null, 
	                Panel(null, 
	                  PanelBody(null, 
	                    React.DOM.h3({className: "text-center"}, 
	                      "Event Logs"
	                    ), 
	                    React.DOM.br(null)
	                  )
	                )
	              )
	            )
	          )
	        ), 
	        this.props.children
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var EventLogs = React.createClass({displayName: 'EventLogs',
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      Container({id: "container", className: classes}, 
	        Sidebar(null), 
	        Header(null), 
	        Body(null, 
	          Footer(null)
	        )
	      )
	    );
	  }
	});

	module.exports = EventLogs;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Brand = React.createClass({displayName: 'Brand',
	  render: function() {
	    return this.transferPropsTo(
	      NavHeader(null, 
	        NavBrand({tabIndex: "-1"}, 
	          React.DOM.img({src: "/imgs/logo.png", alt: "rubix", width: "111"})
	        )
	      )
	    );
	  }
	});

	var LocaleMenuItem = React.createClass({displayName: 'LocaleMenuItem',
	  render: function() {
	    return (
	      MenuItem({flag: this.props.flag, locale: this.props.locale, parent: this.props.parent, href: "#", active: this.props.active}, 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 2}, 
	              React.DOM.img({src: '/imgs/flags/flags/flat/32/'+this.props.flag+'.png', width: "32", height: "32"})
	            ), 
	            Col({xs: 10}, 
	              Entity({className: "lang-menu-text", entity: "languageMenu", data: {lang: this.props.lang}})
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var Navigation = React.createClass({displayName: 'Navigation',
	  render: function() {
	    return this.transferPropsTo(
	      NavContent({className: "pull-right"}, 
	        Nav(null, 
	          NavItem({className: "logout", href: "#"}, 
	            Icon({bundle: "fontello", glyph: "off-1"})
	          )
	        )
	      )
	    );
	  }  
	});

	var Header = React.createClass({displayName: 'Header',
	  render: function() {
	    return this.transferPropsTo(
	      Grid({id: "navbar"}, 
	        Row(null, 
	          Col({xs: 12}, 
	            NavBar({fixedTop: true, id: "rubix-nav-header"}, 
	              Container({fluid: true}, 
	                Row(null, 
	                  Col({xs: 3, visible: "xs"}, 
	                    SidebarBtn(null)
	                  ), 
	                  Col({xs: 6, sm: 4}, 
	                    Brand(null)
	                  ), 
	                  Col({xs: 3, sm: 8}, 
	                    Navigation({pressed: this.props.pressed})
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Header;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var ApplicationSidebar = React.createClass({displayName: 'ApplicationSidebar',
	  render: function() {
	    return (
	      React.DOM.div(null, 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div({className: "sidebar-header"}, "PAGES"), 
	              React.DOM.div({className: "sidebar-nav-container"}, 
	                SidebarNav({style: {marginBottom: 0}}, 
	                  SidebarNavItem({glyph: "icon-fontello-gauge", name: "Dashboard", href: "/app/dashboard"}), 
	                  SidebarNavItem({glyph: "icon-ikons-plug", name: "Connectors", href: "/app/connectors"}), 
	                  SidebarNavItem({glyph: "icon-ikons-code", name: "API Manager", href: "/app/api-manager"}), 
	                  SidebarNavItem({glyph: "icon-ikons-bar-chart-2", name: "System Performance", href: "/app/system-performance"}), 
	                  SidebarNavItem({glyph: "icon-dripicons-document", name: "Event Logs", href: "/app/event-logs"})
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var StatisticsComponent = React.createClass({displayName: 'StatisticsComponent',
	  componentDidMount: function() {
	    (function() {
	      var data = [
	        {
	          value: 200,
	          color:'#F7464A',
	          highlight: '#FF5A5E',
	          label: 'Red'
	        },
	        {
	          value: 100,
	          color: '#46BFBD',
	          highlight: '#5AD3D1',
	          label: 'Green'
	        },
	        {
	          value: 110,
	          color: '#FDB45C',
	          highlight: '#FFC870',
	          label: 'Yellow'
	        },
	        {
	          value: 130,
	          color: '#949FB1',
	          highlight: '#A8B3C5',
	          label: 'Grey'
	        },
	        {
	          value: 120,
	          color: '#4D5360',
	          highlight: '#616774',
	          label: 'Dark Grey'
	        }
	      ];
	      var ctx = this.refs.myChart.getDOMNode().getContext('2d');
	      new Chart(ctx).PolarArea(data, {
	        maintainAspectRatio: true,
	        scaleLineColor: 'rgba(255,255,255,0.1)'
	      });
	    }.bind(this))();

	    (function() {
	      $(this.refs.sparklineOne.getDOMNode()).sparkline([2,3,5,1,2,5,8,6,7,9,3,5,7,8,3,3,2,9,5,3,2,2,4,6,7,8,9,1,12,14,11,3,4,6,9,17,19,9,5,3,2,2,4,6,7,8,9,10,11,12,14,23,2,3,1,5,6,7,3,2,8,14,12,4,7,14,19,18,22,3,14], {
	          type: 'line',
	          width: '200',
	          height: '40',
	          lineColor: '#FADD7F',
	          fillColor: 'rgba(250, 221, 127, 0.5)'});

	      $(this.refs.sparklineTwo.getDOMNode()).sparkline([0,1,2,1,2,-0.25,-4,-2,-2,-0.6,-2,-0.5,-0.25], {
	          type: 'bar',
	          height: '30',
	          barWidth: 6,
	          zeroAxis: false,
	          barColor: '#ff5a5e',
	          negBarColor: '#52b27e',
	          stackedBarColor: []});

	      var dynamic_data = {
	        nasdaq_prices: [4415.49,4440.42,4416.39,4425.97,4363.45,4432.15,4424.70,4456.02,4473.70,4472.11,4449.56,4444.91,4442.70,4462.90,4369.77,4352.64,4383.89,4352.84,4355.05,4334.97,4370.90,4401.33,4389.25,4434.13,4453.00,4464.93,4508.31,4527.51,4526.48,4532.10],
	        nasdaq_volume: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	        dow_prices: [16943.81,17055.42,17060.68,17138.20,16976.81,17100.18,17051.73,17113.54,17086.63,17083.80,16960.57,16982.59,16912.11,16880.36,16563.30,16493.37,16569.28,16429.47,16443.34,16368.27,16553.93,16569.98,16560.54,16651.80,16713.58,16662.91,16838.74,16919.59,16979.13,17039.49],
	        dow_volume: [60599405,60569705,101734854,111503036,99238723,112530379,67590253,77958670,73444902,66387656,67289449,66187279,75984025,77746377,101667914,84856015,76255891,76627473,78599736,80426811,82415249,65558636,62768164,66015422,62370832,109183219,75671468,67221266,61963156,65160621]
	      };
	      $(this.refs.dow.getDOMNode()).sparkline(dynamic_data.dow_volume, {height: '1.3em', type: 'bar', barSpacing: 0, barWidth: 3, barColor: '#374B55', tooltipPrefix: 'Volume: '});
	      $(this.refs.dow.getDOMNode()).sparkline(dynamic_data.dow_prices, {composite: true, height: '1.3em', fillColor:false, lineColor:'#EE682F', tooltipPrefix: 'Index: '});
	      $(this.refs.nasdaq.getDOMNode()).sparkline(dynamic_data.nasdaq_prices, {composite: false, height: '1.3em', fillColor:false, lineColor:'#7CD5BA', tooltipPrefix: 'Index: '});
	      $(this.refs.malefemale.getDOMNode()).sparkline('html', {
	          type: 'bar',
	          height: '30',
	          barWidth: 5,
	          barColor: '#79b0ec',
	          stackedBarColor: ['#79b0ec','#EA7882']});
	    }.bind(this))();
	  },
	  render: function() {
	    return (
	      React.DOM.div(null, 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div({className: "sidebar-header text-center"}, "STATISTICS"), 
	              React.DOM.div({style: {marginLeft: -25, marginRight: -25, marginTop: 12.5, marginBottom: 12.5}}, React.DOM.canvas({width: "250", height: "150", ref: "myChart"})), 
	              React.DOM.hr({style: {borderColor: 'rgba(255,255,255,0.1)', borderWidth: 2, marginTop: 12.5, marginBottom: 12.5, width: 200}}), 
	              React.DOM.div(null, 
	                React.DOM.div({ref: "sparklineOne"})
	              ), 
	              React.DOM.div(null, 
	                Grid(null, 
	                  Row(null, 
	                    Col({xs: 6, collapseLeft: true, collapseRight: true}, 
	                      React.DOM.div({className: "sidebar-header"}, "AAPL"), 
	                      React.DOM.div({ref: "sparklineTwo"})
	                    ), 
	                    Col({xs: 6, collapseLeft: true, collapseRight: true}, 
	                      React.DOM.div({className: "sidebar-header text-left", style: {marginRight: 5, marginLeft: 5}}, "Yearly Change"), 
	                      React.DOM.div(null, 
	                        React.DOM.h5({className: "bg-darkgreen45 fg-white text-center", style: {margin: 0, height: 30, paddingTop: 7, marginLeft: 5, marginRight: 5}}, "+127.01")
	                      )
	                    )
	                  )
	                )
	              ), 
	              React.DOM.hr({style: {borderColor: 'rgba(255,255,255,0.1)', borderWidth: 2, marginTop: 25, marginBottom: 12.5, width: 200}}), 
	              React.DOM.div(null, 
	                Grid(null, 
	                  Row(null, 
	                    Col({xs: 6, collapseLeft: true, collapseRight: true}, 
	                      React.DOM.div({className: "sidebar-header"}, "NASDAQ"), 
	                      React.DOM.div({ref: "nasdaq"})
	                    ), 
	                    Col({xs: 6, collapseLeft: true, collapseRight: true}, 
	                      React.DOM.div({className: "sidebar-header"}, "DOW"), 
	                      React.DOM.div({ref: "dow"})
	                    )
	                  )
	                )
	              ), 
	              React.DOM.div(null, 
	                Grid(null, 
	                  Row(null, 
	                    Col({xs: 6, collapseLeft: true, collapseRight: true}, 
	                      React.DOM.div(null, 
	                        React.DOM.span({className: "fg-yellow"}, "USD "), 
	                        React.DOM.span({className: "fg-green"}, "0.43% ", Icon({glyph: "icon-fontello-up-dir"}))
	                      ), 
	                      React.DOM.div({className: "fg-white"}, 
	                        React.DOM.h4({style: {marginTop: 0}}, "$518.47")
	                      ), 
	                      React.DOM.p(null, 
	                        React.DOM.span({className: "fg-yellow"}, "EUR "), 
	                        React.DOM.span({className: "fg-white"}, "€391.85")
	                      )
	                    ), 
	                    Col({xs: 6, collapseLeft: true, collapseRight: true}, 
	                      React.DOM.div(null, 
	                        React.DOM.span({className: "fg-yellow"}, "CNY "), 
	                        React.DOM.span({className: "fg-red"}, "0.24% ", Icon({glyph: "icon-fontello-down-dir"}))
	                      ), 
	                      React.DOM.div({className: "fg-white"}, 
	                        React.DOM.h4({style: {marginTop: 0}}, "¥3,170.65")
	                      ), 
	                      React.DOM.p(null, 
	                        React.DOM.span({className: "fg-yellow"}, "GBP "), 
	                        React.DOM.span({className: "fg-white"}, "£312.89")
	                      )
	                    )
	                  )
	                )
	              ), 
	              React.DOM.hr({style: {borderColor: 'rgba(255,255,255,0.1)', borderWidth: 2, marginTop: 12.5, marginBottom: 25, width: 200}}), 
	              React.DOM.div(null, 
	                Grid(null, 
	                  Row(null, 
	                    Col({xs: 12, collapseLeft: true, collapseRight: true}, 
	                      React.DOM.div({ref: "malefemale"}, "1:1,1:2,1:3,2:0.01,1:0.1,0.2:1,2:2,2:1.5,2:1.2,1.2:2,1:3,1:0.25,2:0.02,1:3,3:0.5,2:4,4:1,1:1,1:2,1:4,2:1,2:3,2:1.5,2:0.5,2:0.25,1:0.01,1:0.1,0.2:1,2:2,2:1.5,2:1.2,1.2:2,1:3"), 
	                      React.DOM.br(null)
	                    )
	                  ), 
	                  Row(null, 
	                    Col({xs: 4, collapseLeft: true, collapseRight: true}, 
	                      React.DOM.span({className: "sidebar-header"}, "MALE")
	                    ), 
	                    Col({xs: 8, collapseLeft: true, collapseRight: true}, 
	                      Icon({glyph: "icon-fontello-male fg-blue"}), 
	                      Icon({glyph: "icon-fontello-male fg-blue"}), 
	                      Icon({glyph: "icon-fontello-male fg-blue"}), 
	                      Icon({glyph: "icon-fontello-male fg-blue"}), 
	                      Icon({glyph: "icon-fontello-male fg-blue"}), 
	                      Icon({glyph: "icon-fontello-male fg-black75"}), 
	                      Icon({glyph: "icon-fontello-male fg-black75"}), 
	                      Icon({glyph: "icon-fontello-male fg-black75"}), 
	                      Icon({glyph: "icon-fontello-male fg-black75"}), 
	                      Icon({glyph: "icon-fontello-male fg-black75"}), 
	                      Icon({glyph: "icon-fontello-male fg-black75"}), 
	                      Icon({glyph: "icon-fontello-male fg-black75"}), 
	                      Icon({glyph: "icon-fontello-male fg-black75"}), 
	                      Icon({glyph: "icon-fontello-male fg-black75"}), 
	                      Icon({glyph: "icon-fontello-male fg-black75"})
	                    )
	                  ), 
	                  Row(null, 
	                    Col({xs: 4, collapseLeft: true, collapseRight: true}, 
	                      React.DOM.span({className: "sidebar-header"}, "FEMALE")
	                    ), 
	                    Col({xs: 8, collapseLeft: true, collapseRight: true}, 
	                      Icon({glyph: "icon-fontello-female fg-red"}), 
	                      Icon({glyph: "icon-fontello-female fg-red"}), 
	                      Icon({glyph: "icon-fontello-female fg-red"}), 
	                      Icon({glyph: "icon-fontello-female fg-red"}), 
	                      Icon({glyph: "icon-fontello-female fg-red"}), 
	                      Icon({glyph: "icon-fontello-female fg-red"}), 
	                      Icon({glyph: "icon-fontello-female fg-red"}), 
	                      Icon({glyph: "icon-fontello-female fg-black75"}), 
	                      Icon({glyph: "icon-fontello-female fg-black75"}), 
	                      Icon({glyph: "icon-fontello-female fg-black75"}), 
	                      Icon({glyph: "icon-fontello-female fg-black75"}), 
	                      Icon({glyph: "icon-fontello-female fg-black75"})
	                    )
	                  )
	                )
	              ), 
	              React.DOM.br(null)
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var TimelineComponent = React.createClass({displayName: 'TimelineComponent',
	  render: function() {
	    return (
	      React.DOM.div(null, 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12, collapseLeft: true, collapseRight: true}, 
	              TimelineView({className: "border-black50 tl-blue"}, 
	                TimelineItem(null, 
	                  TimelineHeader(null, 
	                    TimelineAvatar({src: "/imgs/avatars/avatar5.png", className: "border-blue"}), 
	                    TimelineTitle(null, 
	                      "Jordyn Ouellet"
	                    )
	                  ), 
	                  TimelineBody(null, 
	                    React.DOM.ul(null, 
	                      React.DOM.li(null, 
	                        React.DOM.div(null, 
	                          React.DOM.div({className: "fg-lightgray"}, React.DOM.small(null, React.DOM.strong(null, "Aug 10, 2014"))), 
	                          React.DOM.div(null, React.DOM.small(null, "Sent you a friend request!"))
	                        ), 
	                        React.DOM.br(null), 
	                        React.DOM.div({className: "text-center"}, 
	                          Button({xs: true, outlined: true, bsStyle: "darkgreen45"}, 
	                            "Accept"
	                          ), ' ', 
	                          Button({xs: true, outlined: true, bsStyle: "red"}, 
	                            "Reject"
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ), 
	              TimelineView({className: "border-black50 tl-green"}, 
	                TimelineItem(null, 
	                  TimelineHeader(null, 
	                    TimelineAvatar({src: "/imgs/avatars/avatar7.png", className: "border-green"}), 
	                    TimelineTitle(null, 
	                      "Toby King"
	                    )
	                  ), 
	                  TimelineBody(null, 
	                    React.DOM.ul(null, 
	                      React.DOM.li(null, 
	                        React.DOM.div({className: "fg-lightgray"}, React.DOM.small(null, React.DOM.strong(null, "Aug 9, 2014"))), 
	                        React.DOM.div(null, 
	                          React.DOM.small(null, "Visiting ", React.DOM.strong({className: "fg-darkgreen45"}, "The Museum of Modern Art"), " at ", React.DOM.strong(null, React.DOM.em(null, "11 W 53rd St, New York, NY 10019")))
	                        ), 
	                        React.DOM.br(null), 
	                        React.DOM.img({border: "0", src: "/imgs/staticmap.png", alt: "Points of Interest in Lower Manhattan"})
	                      ), 
	                      React.DOM.li(null, 
	                        React.DOM.div({className: "fg-lightgray"}, React.DOM.small(null, React.DOM.strong(null, "Aug 8, 2014"))), 
	                        React.DOM.div(null, 
	                          React.DOM.small(null, "Driving through! :)")
	                        ), 
	                        React.DOM.br(null), 
	                        React.DOM.img({border: "0", width: "155", src: "/imgs/gallery/tumblr_n7yhe1sTa41st5lhmo1_1280-thumb.jpg", alt: "the taxi"})
	                      )
	                    )
	                  )
	                )
	              ), 
	              TimelineView({className: "border-black50 tl-yellow"}, 
	                TimelineItem(null, 
	                  TimelineHeader(null, 
	                    TimelineAvatar({src: "/imgs/avatars/avatar10.png", className: "border-yellow"}), 
	                    TimelineTitle(null, 
	                      "Angelina Mills"
	                    )
	                  ), 
	                  TimelineBody(null, 
	                    React.DOM.ul(null, 
	                      React.DOM.li(null, 
	                        React.DOM.div({className: "fg-lightgray"}, React.DOM.small(null, React.DOM.strong(null, "Aug 8, 2014"))), 
	                        React.DOM.div(null, 
	                          React.DOM.small(null, "Hey you free tomorrow? Lets go shopping!")
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var NotificationComponent = React.createClass({displayName: 'NotificationComponent',
	  componentDidMount: function() {
	    (function() {
	      $(this.refs.sparklineOne.getDOMNode()).sparkline([2,3,5,1,2,5,8,6,7,9,3,5,7,8,3,3,2,9,5,3,2,2,4,6,7,8,9,1,12,14,11,3,4,6,9,10,12,9,5,3,2,2,4,6,7,8,9,10,11,12,14,23], {
	          type: 'bar',
	          barWidth: 2,
	          height: '40',
	          barSpacing: 1,
	          barColor: '#D71F4B'});
	      $(this.refs.sparklineTwo.getDOMNode()).sparkline([10,40,20,30,20,20,40,20,25,35,44,55,66,20,20,30,50,60,30,40,50,60,50,30,20,90,100,100,100,100,100,100], {
	          type: 'bar',
	          barWidth: 4,
	          height: '40',
	          barSpacing: 1,
	          barColor: '#FADD7F'});
	      $(this.refs.pieOne.getDOMNode()).sparkline([1,0.2], {
	          type: 'pie',
	          width: '35',
	          height: '35',
	          sliceColors: ['#FADD7F','#D71F4B']});
	      $(this.refs.pieTwo.getDOMNode()).sparkline([0.2,1], {
	          type: 'pie',
	          width: '35',
	          height: '35',
	          sliceColors: ['#ff9900','#109618']});
	      $(this.refs.pieThree.getDOMNode()).sparkline([1,0.2,0.3,0.2], {
	          type: 'pie',
	          width: '35',
	          height: '35',
	          sliceColors: ['#ff9900','#109618','#66aa00','#dd4477']});
	      $(this.refs.pieFour.getDOMNode()).sparkline([0.2,0.3,0.4,0.1,1,0.2], {
	          type: 'pie',
	          width: '35',
	          height: '35',
	          sliceColors: ['#dd4477','#0099c6','#990099','#ff9900','#B4A1DD','#66aa00']});
	    }.bind(this))();
	  },
	  render: function() {
	    return (
	      React.DOM.div(null, 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12, collapseLeft: true, collapseRight: true}, 
	              TimelineView({className: "border-black50 tl-deepred"}, 
	                TimelineItem(null, 
	                  TimelineHeader(null, 
	                    TimelineIcon({glyph: "icon-fontello-attention-3 bg-deepred fg-white"}), 
	                    TimelineTitle(null, 
	                      "SYSTEM-WIDE ALERTS"
	                    )
	                  ), 
	                  TimelineBody(null, 
	                    React.DOM.ul(null, 
	                      React.DOM.li(null, 
	                        React.DOM.div(null, 
	                          React.DOM.div({className: "fg-lightgray"}, React.DOM.small(null, React.DOM.strong(null, "Aug 12, 2014"))), 
	                          React.DOM.div(null, React.DOM.small(null, "Spike in network traffic detected.")), 
	                          React.DOM.div(null, React.DOM.div({ref: "sparklineOne"}))
	                        )
	                      ), 
	                      React.DOM.li(null, 
	                        React.DOM.div(null, 
	                          React.DOM.div({className: "fg-lightgray"}, React.DOM.small(null, React.DOM.strong(null, "Aug 10, 2014"))), 
	                          React.DOM.div(null, React.DOM.small(null, "Node 1 down for 30 minutes! Take action!"))
	                        ), 
	                        React.DOM.br(null), 
	                        React.DOM.div({className: "text-center"}, 
	                          Button({xs: true, outlined: true, bsStyle: "darkgreen45"}, 
	                            "Restore"
	                          ), ' ', 
	                          Button({xs: true, outlined: true, bsStyle: "red"}, 
	                            "Destroy"
	                          )
	                        )
	                      )
	                    )
	                  )
	                )
	              ), 
	              TimelineView({className: "border-black50 tl-yellow"}, 
	                TimelineItem(null, 
	                  TimelineHeader(null, 
	                    TimelineIcon({glyph: "icon-fontello-attention-3 bg-yellow fg-red"}), 
	                    TimelineTitle(null, 
	                      "NODE ALERTS"
	                    )
	                  ), 
	                  TimelineBody(null, 
	                    React.DOM.ul(null, 
	                      React.DOM.li(null, 
	                        React.DOM.div(null, 
	                          React.DOM.div({className: "fg-lightgray"}, React.DOM.small(null, React.DOM.strong(null, "Aug 12, 2014"))), 
	                          React.DOM.div(null, React.DOM.small(null, "CPU running at 100% on Node 1.")), 
	                          React.DOM.div(null, React.DOM.div({ref: "sparklineTwo"}))
	                        )
	                      ), 
	                      React.DOM.li(null, 
	                        React.DOM.div(null, 
	                          React.DOM.div({className: "fg-lightgray"}, React.DOM.small(null, React.DOM.strong(null, "Aug 10, 2014"))), 
	                          React.DOM.div(null, React.DOM.small(null, "Running out of disk space on ", React.DOM.strong({className: "fg-yellow"}, "Node 2"), ", ", React.DOM.strong({className: "fg-yellow"}, "Node 3"), ", ", React.DOM.strong({className: "fg-yellow"}, "Node 5"), " and ", React.DOM.strong({className: "fg-yellow"}, "Node 7")))
	                        ), 
	                        React.DOM.br(null), 
	                        React.DOM.div({className: "text-center"}, 
	                          React.DOM.span({ref: "pieOne", style: {marginLeft: 5}}), 
	                          React.DOM.span({ref: "pieTwo", style: {marginLeft: 5}}), 
	                          React.DOM.span({ref: "pieThree", style: {marginLeft: 5}}), 
	                          React.DOM.span({ref: "pieFour", style: {marginLeft: 5}})
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var SidebarSection = React.createClass({displayName: 'SidebarSection',
	  render: function() {
	    return this.transferPropsTo(
	      React.DOM.div({id: "sidebar"}, 
	        React.DOM.div({id: "avatar"}, 
	          Grid(null, 
	            Row({className: "fg-white"}, 
	              Col({xs: 12, id: "avatar-col"}, 
	                React.DOM.div({className: "text-center", style: {top: 23, fontSize: 24, lineHeight: 1, position: 'relative'}}, "TMS User")
	              )
	            )
	          )
	        ), 
	        SidebarControls(null, 
	          SidebarControlBtn({bundle: "fontello", glyph: "docs", key: 0}), 
	          SidebarControlBtn({bundle: "fontello", glyph: "chart-pie-2", key: 1, style: {visibility: 'hidden'}}), 
	          SidebarControlBtn({bundle: "fontello", glyph: "th-list-2", key: 2, style: {visibility: 'hidden'}}), 
	          SidebarControlBtn({bundle: "fontello", glyph: "bell-5", key: 3, style: {visibility: 'hidden'}})
	        ), 
	        React.DOM.div({id: "sidebar-container"}, 
	          Sidebar({key: 0, active: true}, 
	            ApplicationSidebar(null)
	          ), 
	          Sidebar({key: 1}, 
	            StatisticsComponent({style: {display: 'none'}})
	          ), 
	          Sidebar({key: 2}, 
	            TimelineComponent({style: {display: 'none'}})
	          ), 
	          Sidebar({key: 3}, 
	            NotificationComponent({style: {display: 'none'}})
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = SidebarSection;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var Footer = React.createClass({displayName: 'Footer',
	  getInitialState: function() {
	    return {
	      version: 0
	    };
	  },
	  componentDidMount: function() {
	    this.setState({
	      version: document.getElementsByTagName('body')[0].getAttribute('data-version')
	    });
	  },
	  render: function() {
	    return (
	      React.DOM.div(null, 
	        Grid({gutterBottom: true}), 
	        Grid({id: "footer", className: "text-center"}, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div(null, "© 2014 3PLogic")
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Footer;


/***/ }
/******/ ])
})();