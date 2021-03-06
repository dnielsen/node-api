/*! 3PLogic - v1.0.4 - 2014-10-08 [copyright: SketchPixy LLP, email: support@sketchpixy.com] */
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
	l20n.initializeLocales('app', {
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

	var xml = __webpack_require__(11);

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
	  getModal: function() {
	    var highlightAll = function() {
	      Prism.highlightAll();
	    };

	    return (
	      Modal({lg: true, onShown: highlightAll}, 
	        ModalHeader(null, 
	          Button({onClick: ModalManager.remove, onTouchEnd: ModalManager.remove, close: true}), 
	          React.DOM.h4({className: "modal-title"}, "Event Data Viewer")
	        ), 
	        ModalBody(null, 
	          React.DOM.pre({style: {margin: 0}}, 
	            React.DOM.code({className: "language-markup"}, 
	              xml
	            )
	          )
	        )
	      )
	    );
	  },
	  handleLinkClick: function() {
	    ModalManager.create.bind(this, this.getModal())();
	  },
	  componentDidMount: function() {
	    var chart = new Rubix('#main-chart', {
	      width: '100%',
	      height: 300,
	      subtitleColor: '#6666FF',
	      axis: {
	        x: {
	          type: 'linear',
	          label: 'Time',
	          labelColor: '#6666FF'
	        },
	        y: {
	          type: 'linear',
	          tickFormat: 'd',
	          tickCount: 2,
	          labelColor: '#6666FF'
	        }
	      },
	      tooltip: {
	        color: '#0000FF',
	        format: {
	          y: '.0f'
	        }
	      },
	      margin: {
	        top: 25,
	        left: 50,
	        right: 25
	      },
	      interpolate: 'linear',
	      master_detail: true,
	      show_markers: true
	    });

	    var activities = chart.area_series({
	      name: 'Activity',
	      color: '#6666FF',
	      marker: 'circle',
	      fillopacity: 0.7,
	      noshadow: true
	    });

	    // console.log(chart.extent);

	    // var t = 1297110663*850;
	    // var v = [5, 10, 2, 20, 40, 35, 30, 20, 25, 10, 20, 10, 20, 15, 25, 20, 30, 25, 30, 25, 30, 35, 40, 20, 15, 20, 10, 25, 15, 20, 10, 25, 30, 30, 25, 20, 10, 50, 60, 30];

	    // var getValue = function() {
	    //   var val = v.shift();
	    //   v.push(val);
	    //   return val;
	    // }

	    // var data = d3.range(40).map(function() {
	    //   return {
	    //     x: (t+=(86400000*20)),
	    //     y: getValue()
	    //   };
	    // });


	    var daterangepicker = $(this.refs.daterangepicker.getDOMNode());
	    daterangepicker.daterangepicker({
	      timePicker: true,
	      timePickerIncrement: 30,
	      format: 'YYYY-MM-DD HH:mm:ss',
	      ranges: {
	       '1 hour': [moment().subtract(1, 'hour'), moment()],
	       '6 hours': [moment().subtract(6, 'hours'), moment()],
	       '12 hours': [moment().subtract(12, 'hours'), moment()],
	       '1 day': [moment().subtract(1, 'day'), moment()],
	       '2 days': [moment().subtract(2, 'days'), moment()],
	       '3 days': [moment().subtract(3, 'days'), moment()],
	       'Last 7 Days': [moment().subtract(6, 'days'), moment()]
	      },
	      opens: 'left',
	      startDate: moment().subtract(3, 'days'),
	      endDate: moment()
	    }, function(start, end) {
	      $('#searchinput').val(start.format('YYYY-MM-DD HH:mm:ss') + ' to ' + end.format('YYYY-MM-DD HH:mm:ss'));
	      var table = $('#example').DataTable();
	      table.draw();
	      renderChart();
	    });
	    function renderChart() {
	      var start = moment().subtract(7, 'days').format('YYYY-MM-DD HH:mm:ss');
	      var end = moment().format('YYYY-MM-DD HH:mm:ss');
	      $.get('/activities/timestamp/'+start+'/'+end, function(result) {
	        var data = [], x;
	        for(var i=0; i < result.length; i++) {
	          data.push({
	            x: i,
	            xValue: moment(new Date(result[i].x)).toDate().getTime(),
	            y: result[i].y
	          });
	        }
	        var start = Math.floor(data.length / 4);
	        if(start >= 1) {
	          // console.log(daterangepicker.data('daterangepicker').startDate.toDate().getTime(), data[data.length-1-start].x, data[data.length-1].x)
	          if(daterangepicker.data('daterangepicker').startDate.toDate().getTime() > data[data.length-1].xValue) return $('#main-chart').css('visibility', 'hidden');
	          $('#main-chart').css('visibility', 'visible');
	          var min = data[data.length-1-start].x;
	          var max = data[data.length-1].x;
	          chart.extent = [data[data.length-1-start].x, max];
	        }
	        chart.on('brushchange', function(extent) {
	          var start = data[Math.ceil(extent[0])].xValue;
	          var end = data[Math.ceil(extent[1])].xValue;
	          console.log(start, end);
	          daterangepicker.data('daterangepicker').setStartDate(moment(new Date(start)));
	          daterangepicker.data('daterangepicker').setEndDate(moment(new Date(end)));
	          start = daterangepicker.data('daterangepicker').startDate.format('YYYY-MM-DD HH:mm:ss');
	          end = daterangepicker.data('daterangepicker').endDate.format('YYYY-MM-DD HH:mm:ss');
	          console.log(start, end);
	          $('#searchinput').val(start + ' to ' + end);
	          var table = $('#example').DataTable();
	          table.draw();          
	        });
	        activities.addData(data);
	      });
	    }
	    $('#searchinput').val(daterangepicker.data('daterangepicker').startDate.format('YYYY-MM-DD HH:mm:ss') + ' to ' + daterangepicker.data('daterangepicker').endDate.format('YYYY-MM-DD HH:mm:ss'));
	    $(this.refs.icon.getDOMNode()).attr('class', 'rubix-icon icon-fontello-calendar');
	    $('#example')
	      .addClass('nowrap')
	      .DataTable({
	        responsive: true,
	        processing: true,
	        serverSide: true,
	        ajax: function(data, callback, settings) {
	          data.range = {
	            start: daterangepicker.data('daterangepicker').startDate.format('YYYY-MM-DD HH:mm:ss'),
	            end: daterangepicker.data('daterangepicker').endDate.format('YYYY-MM-DD HH:mm:ss'),
	            column: 'timestamp'
	          };
	          $.post('/data-source/activities', data, function(d) {
	            this.setState({
	              events: d.events,
	              objects: d.objects
	            });
	            callback(d);
	          }.bind(this));
	        }.bind(this),
	        drawCallback: function() {
	          $('.view-data').off('click').on('click', function(e) {
	            e.preventDefault();
	            e.stopPropagation();
	            this.handleLinkClick();
	          }.bind(this));
	        }.bind(this),
	        columns: [
	          {data: 'timestamp'},
	          {data: 'process_name'},
	          {data: 'process_event'},
	          {data: 'process_method'},
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
	                    return mDate.format("lll");
	                  } else return "";
	              }
	              return "";
	            }
	          },
	          { targets: [-1, -2], className: 'dt-body-right' },
	          {
	            targets: [6],
	            data: function(x, y, z, grid) {
	              return '<a class="view-data" href="#">View Data</a>';
	            }.bind(this)}
	        ]
	    });

	    renderChart();

	    (function() {
	      var chart = new Rubix('#bo-chart', {
	        title: 'Chart breakdown by Business Object',
	        titleColor: '#EA7882',
	        subtitleColor: '#EA7882',
	        height: 250,
	        axis: {
	          x: {
	            type: 'ordinal'
	          },
	          y:  {
	            type: 'linear',
	            tickFormat: 'd',
	            label: 'Total fruit consumption'
	          }
	        },
	        tooltip: {
	          color: 'white',
	          format: {
	            y: '.0f'
	          }
	        },
	        show_markers: false
	      });

	      var success = chart.column_series({
	        name: 'Success',
	        color: '#79B0EC',
	        marker: 'square'
	      });

	      success.addData([
	        {x: 'Data files', y: 15},
	        {x: 'Shipments', y: 40},
	        {x: 'Loads', y: 30},
	        {x: 'Updates', y: 50},
	        {x: 'Invoices', y: 10}
	      ]);

	      var warning = chart.column_series({
	        name: 'Warning',
	        color: '#E3631C',
	        marker: 'diamond'
	      });

	      warning.addData([
	        {x: 'Data files', y: 3},
	        {x: 'Shipments', y: 0},
	        {x: 'Loads', y: 0},
	        {x: 'Updates', y: 5},
	        {x: 'Invoices', y: 3}
	      ]);

	      var failure = chart.column_series({
	        name: 'Failure',
	        color: '#FF0000'
	      });

	      failure.addData([
	        {x: 'Data files', y: 4},
	        {x: 'Shipments', y: 0},
	        {x: 'Loads', y: 0},
	        {x: 'Updates', y: 0},
	        {x: 'Invoices', y: 2}
	      ]);
	    })();
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
	                        Col({xs: 7}, 
	                          React.DOM.h3({style: {margin: 0}}, "Live Data Feed")
	                        ), 
	                        Col({xs: 5, className: "text-right"}, 
	                          InputGroup({className: "date", ref: "daterangepicker"}, 
	                            Input({id: "searchinput", type: "text", className: "form-control", disabled: true}), 
	                            InputGroupAddon(null, 
	                              Icon({ref: "icon", glyph: "icon-fontello-calendar"})
	                            )
	                          )
	                        )
	                      )
	                    ), 
	                    Grid(null, 
	                      Row(null, 
	                        Col({sm: 7, collapseLeft: true, collapseRight: true}, 
	                          React.DOM.div({id: "main-chart"})
	                        ), 
	                        Col({sm: 5, collapseLeft: true, collapseRight: true}, 
	                          React.DOM.div({id: "bo-chart"})
	                        )
	                      )
	                    )
	                  )
	                )
	              ), 
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
	                        Col({xs: 4}, 
	                          Select({onChange: this.handleEvents}, 
	                            React.DOM.option(null, "All events"), 
	                            this.state.events.map(function(ev, i) {
	                              return React.DOM.option({value: ev.process_name, key: 'event-'+i}, ev.process_name)
	                            })
	                          )
	                        ), 
	                        Col({xs: 4, collapseLeft: true}, 
	                          Select({onChange: this.handleObjects}, 
	                            React.DOM.option(null, "Select an object"), 
	                            this.state.objects.map(function(ob, i) {
	                              return React.DOM.option({value: ob.process_event, key: 'object-'+i}, ob.process_event)
	                            })
	                          )
	                        ), 
	                        Col({xs: 4, collapseLeft: true, className: "text-right"}, 
	                          Input({type: "text", placeholder: "Enter an Object ID or File Name", onChange: this.handleObjectIDSearch})
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
	                                React.DOM.th(null, "Status"), 
	                                React.DOM.th(null, "Event Data")
	                              )
	                            ), 
	                            React.DOM.tfoot(null, 
	                              React.DOM.tr(null, 
	                                React.DOM.th(null, "Timestamp"), 
	                                React.DOM.th(null, "Event"), 
	                                React.DOM.th(null, "Object"), 
	                                React.DOM.th(null, "Format"), 
	                                React.DOM.th(null, "Action"), 
	                                React.DOM.th(null, "Status"), 
	                                React.DOM.th(null, "Event Data")
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

	var xml = __webpack_require__(11);

	var BusinessObjectsTable = React.createClass({displayName: 'BusinessObjectsTable',
	  componentDidMount: function() {
	    $(this.refs.nestedtable.getDOMNode()).DataTable({
	      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'All']],
	      columnDefs: [
	        {targets: [0], visible: false},
	        {
	          targets: [3],
	          render: function(data, type, full) {
	            if(data === 'TRUE')
	              return React.renderComponentToString(React.DOM.div({className: "fg-blue"}, "TRUE"))
	            else
	              return React.renderComponentToString(React.DOM.div({className: "fg-darkgray50"}, "FALSE"))
	          }
	        }
	      ]
	    });
	  },
	  render: function() {
	    var otype = ['BOL', 'MBL', 'Link #', 'PRO'];
	    var ovalue = ['00328860046151905', '632003711', '221747042', '328860046151905'];
	    var pkey = ['TRUE', 'FALSE', 'FALSE', 'FALSE'];
	    var data = [], ot, ov, pk;
	    for(var i=0; i < 50; i++) {
	      ot = otype.shift();
	      ov = ovalue.shift();
	      pk = pkey.shift();

	      data.push({
	        id: i, ot: ot, ov: ov, pk: pk
	      });

	      otype.push(ot);
	      ovalue.push(ov);
	      pkey.push(pk);
	    }
	    return (
	      Container(null, 
	        Table({ref: "nestedtable", className: "display", cellSpacing: "0", width: "100%"}, 
	          React.DOM.thead(null, 
	            React.DOM.tr({style: {background: 'white'}}, 
	              React.DOM.th(null), 
	              React.DOM.th(null, "Object Type"), 
	              React.DOM.th(null, "Object Value"), 
	              React.DOM.th(null, "Primary Key")
	            )
	          ), 
	          React.DOM.tfoot(null, 
	            React.DOM.tr({style: {background: 'white'}}, 
	              React.DOM.th(null), 
	              React.DOM.th(null, "Object Type"), 
	              React.DOM.th(null, "Object Value"), 
	              React.DOM.th(null, "Primary Key")
	            )
	          ), 
	          React.DOM.tbody(null, 
	            data.map(function(d, i) {
	              return (
	                React.DOM.tr({key: 'event-tr-'+i}, 
	                  React.DOM.td(null, d.id), 
	                  React.DOM.td(null, d.ot), 
	                  React.DOM.td(null, d.ov), 
	                  React.DOM.td(null, d.pk)
	                )
	              );
	            })
	          )
	        ), 
	        React.DOM.br(null)
	      )
	    );
	  }
	});

	var DataView = React.createClass({displayName: 'DataView',
	  getModal: function() {
	    var highlightAll = function() {
	      Prism.highlightAll();
	    };

	    return (
	      Modal({lg: true, onShown: highlightAll}, 
	        ModalHeader(null, 
	          Button({onClick: ModalManager.remove, onTouchEnd: ModalManager.remove, close: true}), 
	          Grid(null, 
	            Row(null, 
	              Col({xs: 3, collapseLeft: true, collapseRight: true}, 
	                React.DOM.h4({className: "modal-title", style: {display: 'inline'}}, "Document Viewer"), ' ', 
	                Button({bsStyle: "blue", outlined: true, onlyOnHover: true}, Icon({glyph: "icon-fontello-download"}))
	              ), 
	              Col({xs: 9})
	            )
	          )
	        ), 
	        ModalBody(null, 
	          React.DOM.pre({style: {margin: 0}}, 
	            React.DOM.code({className: "language-markup"}, 
	              xml
	            )
	          )
	        )
	      )
	    );
	  },
	  handlePreview: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    ModalManager.create.bind(this, this.getModal())();
	  },
	  render: function() {
	    return (
	      Grid(null, 
	        Row(null, 
	          Col({xs: 6, collapseLeft: true, collapseRight: true}, 
	            React.DOM.h4(null, "Input: ", Link({href: "#"}, "shipment_0232_in.dat")), 
	            React.DOM.dl({className: "dl-horizontal"}, 
	              React.DOM.dt({style: {textAlign: 'left'}}, "Kind:"), 
	              React.DOM.dd(null, "Document"), 
	              React.DOM.dt({style: {textAlign: 'left'}}, "Size:"), 
	              React.DOM.dd(null, "5.3 MB"), 
	              React.DOM.dt({style: {textAlign: 'left'}}, "File:"), 
	              React.DOM.dd(null, React.DOM.a({href: "#", onClick: this.handlePreview}, "Preview")), 
	              React.DOM.dt({style: {textAlign: 'left'}}, "Created:"), 
	              React.DOM.dd(null, "September 21, 2014 at 12:47 PM"), 
	              React.DOM.dt({style: {textAlign: 'left'}}, "Process Time:"), 
	              React.DOM.dd(null, "321 ms (0.3 seconds)")
	            )
	          ), 
	          Col({xs: 6, collapseLeft: true, collapseRight: true}, 
	            React.DOM.h4(null, "Output: ", React.DOM.a({href: "#"}, "Load_Import_0032888402084.xml")), 
	            React.DOM.dl({className: "dl-horizontal"}, 
	              React.DOM.dt({style: {textAlign: 'left'}}, "Kind:"), 
	              React.DOM.dd(null, "XML Document"), 
	              React.DOM.dt({style: {textAlign: 'left'}}, "Size:"), 
	              React.DOM.dd(null, "111 KB"), 
	              React.DOM.dt({style: {textAlign: 'left'}}, "File:"), 
	              React.DOM.dd(null, React.DOM.a({href: "#", onClick: this.handlePreview}, "Preview")), 
	              React.DOM.dt({style: {textAlign: 'left'}}, "Created:"), 
	              React.DOM.dd(null, "September 21, 2014 at 12:47 PM"), 
	              React.DOM.dt({style: {textAlign: 'left'}}, "Process Time:"), 
	              React.DOM.dd(null, "321 ms (0.3 seconds)")
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var Detail = React.createClass({displayName: 'Detail',
	  render: function() {
	    return (
	      Container({className: "text-left"}, 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.h5(null, "Event Details: (", React.DOM.span({className: "fg-davygray"}, "99559830-3f73-11e4-9f10-7056818cadd9"), ")")
	            )
	          ), 
	          Row(null, 
	            Col({xs: 12, style: {paddingTop: 12.5}}, 
	              TabList({bsStyle: ""}, 
	                Tab({pane: 'el-'+this.props.key+':bo', active: true}, "Business Objects"), 
	                Tab({pane: 'el-'+this.props.key+':data'}, "Data"), 
	                Tab({pane: 'el-'+this.props.key+':service'}, "Service Calls")
	              )
	            )
	          )
	        ), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12, style: {paddingTop: 12.5}}, 
	              TabContent(null, 
	                TabPane({ref: 'el-'+this.props.key+':bo', active: true}, 
	                  BusinessObjectsTable(null)
	                ), 
	                TabPane({ref: 'el-'+this.props.key+':data'}, 
	                  DataView(null)
	                ), 
	                TabPane({ref: 'el-'+this.props.key+':service'}, 
	                  React.DOM.p(null, LoremIpsum({query: "3s"}))
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var Body = React.createClass({displayName: 'Body',
	  componentDidMount: function() {
	    var mountedComponents = {};
	    $('#example')
	      .DataTable({
	        processing: true,
	        serverSide: true,
	        ajax: function(data, callback, settings) {
	          $.post('/data-source/event-logs', data, function(d) {
	            callback(d);
	          }.bind(this));
	        }.bind(this),
	        columns: [
	          {
	            "data": null,
	            "orderable": false,
	            "searchable": false,
	            "defaultContent": "",
	            "class": "details-control text-center"
	          },
	          {data: 'event_id', visible: false},
	          {data: 'timestamp'},
	          {data: 'severity'},
	          {data: 'process_name'},
	          {data: 'process_method'},
	          {data: 'environment'},
	          {data: 'object_group_id'}
	        ],
	        preDrawCallback: function(settings) {
	          $('.drill-down').off('click');
	          for(var i in mountedComponents) {
	            React.unmountComponentAtNode(mountedComponents[i]);
	          }
	        },
	        drawCallback: function(settings) {
	          $('.drill-down').on('click', function(e) {
	            e.preventDefault();
	            e.stopPropagation();
	            var self = e.currentTarget;
	            var tr = $(self).parent().parent();
	            var id = $(self).attr('data-id');

	            var isClicked = $(self).data('is-clicked');
	            if(!isClicked) {
	              $(self).find('.rubix-icon').removeClass('icon-feather-plus').addClass('icon-feather-minus');
	              tr.after('<tr role="row" id="drilled-down-content-'+id+'-container" class="even drilled-down no-hover"><td style="background: rgba(41, 163, 138, 0.29);"></td><td style="background: white;" id="drilled-down-content-'+id+'" class="text-center" colspan="'+(settings.aoColumns.length-2)+'"><h3>Loading ...</h3></td></tr>');
	              $(self).data('is-clicked', true).addClass('active');
	              mountedComponents['drilled-down-content-'+id] = $('#drilled-down-content-'+id).get(0);
	              React.renderComponent(Detail({key: id}), mountedComponents['drilled-down-content-'+id]);
	            } else {
	              $(self).find('.rubix-icon').removeClass('icon-feather-minus').addClass('icon-feather-plus');
	              React.unmountComponentAtNode($('#drilled-down-content-'+id).get(0));
	              $('#drilled-down-content-'+id+'-container').remove();
	              $(self).data('is-clicked', false).removeClass('active');
	            }
	          }.bind(this));
	        }.bind(this),
	        columnDefs: [
	          {
	            targets: [0],
	            render: function(data, type, full) {
	              return React.renderComponentToString(React.DOM.a({className: "drill-down", 'data-id': data.event_log_id, href: "#"}, Icon({glyph: "icon-feather-plus"})));
	            }
	          },
	          {
	            targets: [2],
	            type: 'date',
	            render: function(data, type, full) {
	              if(data){
	                  var mDate = moment(data);
	                  if (mDate && mDate.isValid()) {
	                    return mDate.format("lll");
	                  } else return "";
	              }
	              return "";
	            }
	          },
	          {
	            targets: [3],
	            render: function(data, type, full) {
	              if(data === 'OK')
	                return React.renderComponentToString(React.DOM.div({className: "fg-success"}, "OK"))
	              else
	                return React.renderComponentToString(React.DOM.div({className: "fg-deepred"}, "FAIL"))
	            }
	          }
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
	                          React.DOM.h3({style: {margin: 0, marginBottom: 25}}, "Event Logs")
	                        )
	                      )
	                    ), 
	                    Grid(null, 
	                      Row(null, 
	                        Col({xs: 12}, 
	                          Table({id: "example", className: "display", cellSpacing: "0", width: "100%"}, 
	                            React.DOM.thead(null, 
	                              React.DOM.tr(null, 
	                                React.DOM.th(null), 
	                                React.DOM.th(null), 
	                                React.DOM.th(null, "Timestamp"), 
	                                React.DOM.th(null, "Severity"), 
	                                React.DOM.th(null, "Workflow"), 
	                                React.DOM.th(null, "Process"), 
	                                React.DOM.th(null, "Object"), 
	                                React.DOM.th(null, "Object ID")
	                              )
	                            ), 
	                            React.DOM.tfoot(null, 
	                              React.DOM.tr(null, 
	                                React.DOM.th(null), 
	                                React.DOM.th(null), 
	                                React.DOM.th(null, "Timestamp"), 
	                                React.DOM.th(null, "Severity"), 
	                                React.DOM.th(null, "Workflow"), 
	                                React.DOM.th(null, "Process"), 
	                                React.DOM.th(null, "Object"), 
	                                React.DOM.th(null, "Object ID")
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
	              React.DOM.div({className: "sidebar-header"}, "TMS.CONNECT"), 
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
	        ), 
	        React.DOM.hr({style: {borderColor: '#3B4648', borderWidth: 2, marginTop: 15, marginBottom: 0, width: 200}}), 
	        Grid(null, 
	          Row(null, 
	            Col({xs: 12}, 
	              React.DOM.div({className: "sidebar-header"}, "BUSINESS RULES"), 
	              React.DOM.div({className: "sidebar-nav-container"}, 
	                SidebarNav({style: {marginBottom: 0}}, 
	                  SidebarNavItem({glyph: "icon-simple-line-icons-calculator", name: "Variables"}), 
	                  SidebarNavItem({glyph: "icon-simple-line-icons-chemistry", name: "Triggers"}), 
	                  SidebarNavItem({glyph: "icon-simple-line-icons-layers", name: "Automations"}), 
	                  SidebarNavItem({glyph: "icon-simple-line-icons-notebook", name: "SLA"})
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


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<xsd:schema xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns=\"http://southwire.com/Mainframe/Accounting\" targetNamespace=\"http://southwire.com/Mainframe/Accounting\">\n<xsd:complexType name=\"PaidInvoices\">\n    <xsd:sequence>\n        <xsd:element name=\"PaidInvoice\" maxOccurs=\"unbounded\">\n            <xsd:complexType>\n                <xsd:sequence>\n                    <xsd:element name=\"DocNum\">\n                        <xsd:simpleType>\n                            <xsd:restriction base=\"xsd:string\">\n                                <xsd:minLength value=\"1\"/>\n                                <xsd:maxLength value=\"10\"/>\n                            </xsd:restriction>\n                        </xsd:simpleType>\n                    </xsd:element>\n                    <xsd:element name=\"PayDocNum\">\n                        <xsd:simpleType>\n                            <xsd:restriction base=\"xsd:string\">\n                                <xsd:minLength value=\"1\"/>\n                                <xsd:maxLength value=\"10\"/>\n                            </xsd:restriction>\n                        </xsd:simpleType>\n                    </xsd:element>\n                    <xsd:element name=\"InvoiceNum\">\n                        <xsd:simpleType>\n                            <xsd:restriction base=\"xsd:string\">\n                                <xsd:minLength value=\"1\"/>\n                                <xsd:maxLength value=\"16\"/>\n                            </xsd:restriction>\n                        </xsd:simpleType>\n                    </xsd:element>\n                    <xsd:element name=\"CheckDt\">\n                        <xsd:simpleType>\n                            <xsd:restriction base=\"xsd:string\">\n                                <xsd:length value=\"8\"/>\n                            </xsd:restriction>\n                        </xsd:simpleType>\n                    </xsd:element>\n                    <xsd:element name=\"CheckNum\">\n                        <xsd:simpleType>\n                            <xsd:restriction base=\"xsd:string\">\n                                <xsd:minLength value=\"1\"/>\n                                <xsd:maxLength value=\"18\"/>\n                            </xsd:restriction>\n                        </xsd:simpleType>\n                    </xsd:element>\n                    <xsd:element name=\"VendorNum\">\n                        <xsd:simpleType>\n                            <xsd:restriction base=\"xsd:string\">\n                                <xsd:minLength value=\"1\"/>\n                                <xsd:maxLength value=\"10\"/>\n                            </xsd:restriction>\n                        </xsd:simpleType>\n                    </xsd:element>\n                </xsd:sequence>\n            </xsd:complexType>\n        </xsd:element>\n    </xsd:sequence>\n</xsd:complexType>\n</xsd:schema>\n"

/***/ }
/******/ ])
})();