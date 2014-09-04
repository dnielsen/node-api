/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  componentDidMount: function() {
    (function() {
      var chart = new Rubix('#main-chart', {
        width: '100%',
        height: 300,
        title: 'Chart of Total Users',
        titleColor: '#2EB398',
        subtitle: 'Period: 2004 and 2008',
        subtitleColor: '#2EB398',
        axis: {
          x: {
            type: 'datetime',
            tickCount: 3,
            label: 'Time',
            labelColor: '#2EB398'
          },
          y: {
            type: 'linear',
            tickFormat: 'd',
            tickCount: 2,
            labelColor: '#2EB398'
          }
        },
        tooltip: {
          color: '#55C9A6',
          format: {
            y: '.0f',
            x: '%x'
          }
        },
        margin: {
          top: 25,
          left: 50,
          right: 25
        },
        interpolate: 'linear',
        master_detail: true
      });

      var total_users = chart.area_series({
        name: 'Total Users',
        color: '#2EB398',
        marker: 'circle',
        fillopacity: 0.7,
        noshadow: true
      });

      chart.extent = [1297110663*850+(86400000*20*(.35*40)), 1297110663*850+(86400000*20*(.66*40))];

      var t = 1297110663*850;
      var v = [5, 10, 2, 20, 40, 35, 30, 20, 25, 10, 20, 10, 20, 15, 25, 20, 30, 25, 30, 25, 30, 35, 40, 20, 15, 20, 10, 25, 15, 20, 10, 25, 30, 30, 25, 20, 10, 50, 60, 30];

      var getValue = function() {
        var val = v.shift();
        v.push(val);
        return val;
      }

      var data = d3.range(40).map(function() {
        return {
          x: (t+=(86400000*20)),
          y: getValue()
        };
      });

      total_users.addData(data);
    })();
    (function() {
      var chart = new Rubix('#alert-chart', {
        width: '100%',
        height: 200,
        hideLegend: true,
        hideAxisAndGrid: true,
        focusLineColor: '#fff',
        theme_style: 'dark',
        axis: {
          x: {
            type: 'linear'
          },
          y: {
            type: 'linear',
            tickFormat: 'd'
          }
        },
        tooltip: {
          color: '#fff',
          format: {
            x: 'd',
            y: 'd'
          }
        },
        margin: {
          left: 25,
          top: 50,
          right: 25,
          bottom: 25
        }
      });

      var alerts = chart.column_series({
        name: 'Load',
        color: '#7CD5BA',
        nostroke: true
      });

      alerts.addData([
        {x: 0, y: 30},
        {x: 1, y: 40},
        {x: 2, y: 15},
        {x: 3, y: 30},
        {x: 4, y: 35},
        {x: 5, y: 70},
        {x: 6, y: 50},
        {x: 7, y: 60},
        {x: 8, y: 35},
        {x: 9, y: 30},
        {x: 10, y: 40},
        {x: 11, y: 30},
        {x: 12, y: 50},
        {x: 13, y: 35}
      ]);
    })();
    (function() {
      var chart = new Rubix('#male-female-chart', {
        height: 200,
        title: 'Demographics',
        subtitle: 'Visitors',
        axis: {
          x: {
            type: 'ordinal',
            tickFormat: 'd',
            tickCount: 2,
            label: 'Time'
          },
          y:  {
            type: 'linear',
            tickFormat: 'd'
          }
        },
        tooltip: {
          theme_style: 'dark',
          format: {
            y: '.0f'
          },
          abs: {
            y: true
          }
        },
        stacked: true,
        interpolate: 'linear',
        show_markers: true
      });

      var column = chart.column_series({
        name: 'Male Visitors',
        color: '#2D89EF',
        marker: 'cross'
      });

      var data = [
        {x: 2005, y: 21},
        {x: 2006, y: 44},
        {x: 2007, y: 14},
        {x: 2008, y: 18},
        {x: 2009, y: 23},
        {x: 2010, y: 21}
      ];
      column.addData(data);

      var column1 = chart.column_series({
        name: 'Female Visitors',
        color: '#FF0097',
        marker: 'diamond'
      });

      var data1 = [
        {x: 2005, y: -79},
        {x: 2006, y: -56},
        {x: 2007, y: -86},
        {x: 2008, y: -82},
        {x: 2009, y: -77},
        {x: 2010, y: -79}
      ];
      column1.addData(data1);
    })();
    (function() {
      var chart = new Rubix('#orderscomparision', {
        height: 225,
        noSort: true,
        hideYAxis: true,
        title: 'Mac Pro vs iPhone',
        subtitle: 'weekly sales data',
        hideXAxisTickLines: true,
        hideYAxisTickLines: true,
        hideLegend: true,
        gridColor: '#EBEBEB',
        tickColor: '#EBA068',
        titleColor: '#EBA068',
        subtitleColor: '#EBA068',
        axis: {
          x: {
            type: 'ordinal'
          },
          y:  {
            type: 'linear',
            tickFormat: 'd'
          }
        },
        margin: {
          top: 50
        },
        tooltip: {
          color: '#EBA068',
          format: {
            y: '.0f'
          }
        },
        show_markers: false
      });

      var series1 = chart.column_series({
        name: 'Mac Pro Sales',
        color: '#EBA068',
        marker: 'square',
        fillopacity: 1
      });

      series1.addData([
        {x: 'Sun', y: 1},
        {x: 'Mon', y: 2},
        {x: 'Tue', y: 3},
        {x: 'Wed', y: 2},
        {x: 'Thu', y: 2},
        {x: 'Fri', y: 3},
        {x: 'Sat', y: 1}
      ]);


      var series2 = chart.column_series({
        name: 'iPhone Sales',
        color: '#FFD3B1',
        fillopacity: 1
      });

      series2.addData([
        {x: 'Sun', y: 3},
        {x: 'Mon', y: 4},
        {x: 'Tue', y: 6},
        {x: 'Wed', y: 5},
        {x: 'Thu', y: 5.5},
        {x: 'Fri', y: 3},
        {x: 'Sat', y: 2}
      ]);
    })();
    (function() {
      var ticketsCleared = Rubix.Donut('#tickets-cleared', {
        title: 'Tickets Cleared',
        subtitle: 'by agents',
        titleColor: '#EBA068',
        subtitleColor: '#EBA068',
        hideLegend: true,
        height: 300,
        tooltip: {
          color: '#EBA068'
        }
      });

      ticketsCleared.addData([
        {
          name: 'Karl Pohl',
          value: 57,
          color: '#FA824F'
        },
        {
          name: 'Gamze Erdoğan',
          value: 32,
          color: '#EBA068'
        },
        {
          name: 'Leyla Cəlilli',
          value: 23,
          color: '#FFC497'
        },
        {
          name: 'Nadir Üzeyirzadə',
          value: 11,
          color: '#FFC9A0'
        },
        {
          name: 'Anna Sanchez',
          value: 7,
          color: '#FFD3B1'
        }
      ]);
    })();
    (function() {
      $('.line-EA7882').sparkline('html', { type: 'line', height: 25, lineColor: '#EA7882', fillColor: 'rgba(234, 120, 130, 0.5)' });
      $('.line-2EB398').sparkline('html', { type: 'line', height: 25, lineColor: '#2EB398', fillColor: 'rgba(46, 179, 152, 0.5)' });
      $('.line-79B0EC').sparkline('html', { type: 'line', height: 25, lineColor: '#79B0EC', fillColor: 'rgba(121, 176, 236, 0.5)' });
      $('.line-FFC497').sparkline('html', { type: 'line', height: 25, lineColor: '#FFC497', fillColor: 'rgba(255, 196, 151, 0.5)' });
      $('.compositebar1').sparkline('html', { type: 'bar', barColor: '#ffffff', height: 25 });
    })();
    (function() {
      $(this.refs.datetimepicker1.getDOMNode()).datetimepicker({
        widgetParent: '#datetimepicker1-parent'
      }).hide();
    }.bind(this))();
    (function() {
      var data = {
        labels: ['Japan', 'France', 'USA', 'Russia', 'China', 'Dubai', 'India'],
        datasets: [{
          label: 'My First dataset',
          fillColor: 'rgba(220,220,220,0.2)',
          strokeColor: 'rgba(220,220,220,1)',
          pointColor: 'rgba(220,220,220,1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220,220,220,1)',
          data: [65, 59, 90, 81, 56, 55, 40]
        }, {
          label: 'My Second dataset',
          fillColor: 'rgba(234, 120, 130, 0.5)',
          strokeColor: 'rgba(234, 120, 130, 1)',
          pointColor: 'rgba(234, 120, 130, 1)',
          pointStrokeColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151,187,205,1)',
          data: [28, 48, 40, 19, 96, 27, 100]
        }]
      };

      var ctx = document.getElementById('chartjs-1').getContext('2d');
      new Chart(ctx).Radar(data, {
        responsive: false,
        maintainAspectRatio: true
      });
    })();
    (function() {
      // create a map in the "map" div, set the view to a given place and zoom
      var map = L.map('map', {
        scrollWheelZoom: false
      }).setView([38.889221, -77.050176], 16);

      // add an OpenStreetMap tile layer
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // add a marker in the given location, attach some popup content to it and open the popup
      L.marker([38.889221, -77.050176]).addTo(map)
          .bindPopup('<div><strong>Lincoln Memorial:</strong></div><div><small>The Lincoln Memorial is an American national monument built to honor the 16th President of the United States, Abraham Lincoln.</small></div>')
          .openPopup();
    })();
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer>
                <Panel>
                  <PanelBody style={{paddingTop: 5}}>
                    <div id='main-chart'></div>
                  </PanelBody>
                </Panel>
                <Panel horizontal className='force-collapse'>
                  <PanelLeft className='bg-red fg-white tabs panel-sm-1'>
                    <TabContainer className='plain'>
                      <TabList>
                        <Tab pane='panel_tab_panel_combined_plain:home' active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_combined_plain:profile'>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_combined_plain:settings'>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelLeft>
                  <PanelBody className='panel-sm-4' style={{padding: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12} collapseLeft collapseRight>
                          <TabContent>
                            <TabPane ref='panel_tab_panel_combined_plain:home' active style={{padding: 0}}>
                              <div id='male-female-chart'></div>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_combined_plain:profile'>
                              <h4>Left Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_combined_plain:settings'>
                              <h4>Left Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelRight className='bg-lightgreen fg-white panel-sm-2'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='text-center'>
                          <br/>
                          <div>
                            <h4>Gross Revenue</h4>
                            <h2 className='fg-green visible-xs visible-md visible-lg'>9,362.74</h2>
                            <h4 className='fg-green visible-sm'>9,362.74</h4>
                          </div>
                          <hr className='border-green'/>
                          <div>
                            <h4>Net Revenue</h4>
                            <h2 className='fg-green visible-xs visible-md visible-lg'>6,734.89</h2>
                            <h4 className='fg-green visible-sm'>6,734.89</h4>
                          </div>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelRight>
                  <PanelRight className='bg-green fg-green panel-sm-4'>
                    <Grid>
                      <Row className='bg-green fg-lightgreen'>
                        <Col xs={6}>
                          <h3>Daily Load</h3>
                        </Col>
                        <Col xs={6} className='text-right'>
                          <h2 className='fg-lightgreen'>67%</h2>
                        </Col>
                      </Row>
                    </Grid>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <div id='alert-chart' className='rubix-chart'></div>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelRight>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col sm={5} collapseRight>
              <PanelContainer>
                <Panel>
                  <PanelBody style={{padding: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12} collapseLeft collapseRight className='text-center'>
                          <canvas id='chartjs-1' height='200' width='200'></canvas>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-lightorange fg-davygray'>
                <Panel>
                  <PanelHeader className='bg-lightorange fg-darkorange fg-tab-active tabs'>
                    <TabContainer>
                      <TabList>
                        <Tab pane='panel-middle-left:orders' active>
                          <Icon className='icon-1-and-quarter-x' bundle='feather' glyph='bar-graph-2'/>
                        </Tab>
                        <Tab pane='panel-middle-left:tickets'>
                          <Icon className='icon-1-and-quarter-x' bundle='feather' glyph='pie-graph'/>
                        </Tab>
                        <Tab pane='panel-middle-left:maps'>
                          <Icon className='icon-1-and-quarter-x' bundle='feather' glyph='map'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelHeader>
                  <PanelBody style={{paddingTop: 0}}>
                    <TabContent>
                      <TabPane ref='panel-middle-left:orders' active>
                        <div id='orderscomparision'></div>
                        <Grid style={{margin: -25, marginTop: 0}}>
                          <Row className='bg-lightorange fg-darkorange text-center'>
                            <Col xs={12} collapseLeft collapseRight style={{padding: 25, paddingTop: 0}}>
                              <Table alignMiddle collapsed>
                                <tbody>
                                  <tr>
                                    <td style={{width: '33%'}}>
                                      <h6>Total Orders</h6>
                                      <h4>8,584</h4>
                                    </td>
                                    <td style={{width: '33%'}}>
                                      <div style={{position: 'relative'}}>
                                        <div className='compositebar1'>4,6,7,7,4,3,2,1,4,9,3,2,3,5,2,4,3,1</div>
                                      </div>
                                    </td>
                                    <td style={{width: '33%'}}>
                                      <h4>+ 12%</h4>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style={{width: '33%'}}>
                                      <h6>Total Orders</h6>
                                      <h4>2,312</h4>
                                    </td>
                                    <td style={{width: '33%'}}>
                                      <div style={{position: 'relative'}}>
                                        <div className='compositebar1'>3,2,4,6,3,6,7,3,2,1,5,7,8,9,3,2,6,7</div>
                                      </div>
                                    </td>
                                    <td style={{width: '33%'}}>
                                      <h4>0%</h4>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td style={{width: '33%'}}>
                                      <h6>Total Orders</h6>
                                      <h4>4,932</h4>
                                    </td>
                                    <td style={{width: '33%'}}>
                                      <div style={{position: 'relative'}}>
                                        <div className='compositebar1'>2,3,2,4,2,6,4,2,3,5,2,5,2,1,5,2,5,2</div>
                                      </div>
                                    </td>
                                    <td style={{width: '33%'}}>
                                      <h4>- 81%</h4>
                                    </td>
                                  </tr>
                                </tbody>
                              </Table>
                            </Col>
                          </Row>
                        </Grid>
                      </TabPane>
                      <TabPane ref='panel-middle-left:tickets'>
                        <div id='tickets-cleared'></div>
                      </TabPane>
                      <TabPane ref='panel-middle-left:maps'>
                        <h4>Left Panel</h4>
                        <p><LoremIpsum query='2s'/></p>
                      </TabPane>
                    </TabContent>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={7}>
              <PanelContainer>
                <Panel horizontal className='force-collapse'>
                  <PanelBody className='panel-sm-10' style={{padding: 0}}>
                    <Grid>
                      <Row>
                        <Col xs={12} collapseLeft collapseRight>
                          <TabContent>
                            <TabPane ref='complex_stats_table_panel:complex_statistics' active>
                              <Grid>
                                <Row>
                                  <Col xs={12} style={{padding: 25}}>
                                    <Table striped style={{margin: 0}}>
                                      <tbody>
                                        <tr>
                                          <td>Bounce Rate:</td>
                                          <td>
                                            <BLabel className='bg-red fg-white'>+46%</BLabel>
                                          </td>
                                          <td>
                                            <div className='line-EA7882' sparkBarColor='#EA7882'>2,3,7,5,4,4,3,2,3,4,3,2,4,3,4,3,2,5</div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>New visits:</td>
                                          <td>
                                            <BLabel className='bg-darkgreen45 fg-white'>+23%</BLabel>
                                          </td>
                                          <td>
                                            <div className='line-2EB398' sparkBarColor='#2EB398'>7,7,7,7,7,7,6,7,4,7,7,7,7,5,7,7,7,9</div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Transactions:</td>
                                          <td>
                                            <BLabel className='bg-blue fg-white'>43,000 (+50%)</BLabel>
                                          </td>
                                          <td>
                                            <div className='line-79B0EC' sparkBarColor='#79B0EC'>4,6,7,7,4,3,2,1,4,9,3,2,3,5,2,4,3,1</div>
                                          </td>
                                        </tr>
                                        <tr>
                                          <td>Conversions:</td>
                                          <td>
                                            <BLabel className='bg-orange fg-white'>2000 (+75%)</BLabel>
                                          </td>
                                          <td>
                                            <div className='line-FFC497' sparkBarColor='#FFC497'>3,2,4,6,7,4,5,7,4,3,2,1,4,6,7,8,2,8</div>
                                          </td>
                                        </tr>
                                      </tbody>
                                    </Table>
                                  </Col>
                                </Row>
                              </Grid>
                            </TabPane>
                            <TabPane ref='complex_stats_table_panel:profile'>
                              <h4>Left Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane ref='complex_stats_table_panel:settings'>
                              <h4>Left Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelRight className='bg-green fg-white tabs panel-sm-2'>
                    <TabContainer>
                      <TabList>
                        <Tab pane='complex_stats_table_panel:complex_statistics' active>
                          <Icon glyph='icon-ikons-bar-chart-2 icon-1-and-quarter-x'/>
                        </Tab>
                        <Tab pane='complex_stats_table_panel:profile'>
                          <Icon glyph='icon-fontello-user icon-1-and-quarter-x'/>
                        </Tab>
                        <Tab pane='complex_stats_table_panel:settings'>
                          <Icon glyph='icon-fontello-cog icon-1-and-quarter-x'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelRight>
                </Panel>
              </PanelContainer>
              <PanelContainer controlStyles='bg-brown50 fg-white'>
                <Panel horizontal className='force-collapse'>
                  <PanelBody className='panel-sm-7' style={{padding: 0}}>
                    <InputGroup className='date' ref='datetimepicker1'>
                      <Input type='text' className='form-control' />
                      <InputGroupAddon>
                        <Icon glyph='icon-fontello-calendar' />
                      </InputGroupAddon>
                    </InputGroup>
                    <div>
                      <div id='datetimepicker1-parent' className='datetimepicker-inline'></div>
                    </div>
                  </PanelBody>
                  <PanelRight className='panel-sm-5 bg-brown50 fg-white' style={{verticalAlign: 'middle'}}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <div className='text-center'>
                            <Icon glyph='climacon rain cloud' style={{fontSize: '800%', lineHeight: 0}} />
                          </div>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={6} collapseRight>
                          <h4>Max: 25°</h4>
                        </Col>
                        <Col xs={6} collapseLeft className='text-right'>
                          <h4>Min: 22°</h4>
                        </Col>
                      </Row>
                      <Row>
                        <Col xs={12} className='text-center'>
                          <h5>Thundershower</h5>
                          <h6>Wind: 9 km/h | Humidity: 91%</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelRight>
                </Panel>
              </PanelContainer>
              <PanelContainer>
                <Panel>
                  <PanelHeader>
                    <div style={{padding: 25}}>
                      <div id='map' className='map leaflet-container leaflet-fade-anim' style={{height: 300}}></div>
                    </div>
                  </PanelHeader>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        {this.props.children}
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var Dashboard = React.createClass({
  mixins: [Sidebar.SidebarMixin],
  render: function() {
    var classes = classSet({
      'container-open': this.state.open
    });
    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body>
          <Footer />
        </Body>
      </Container>
    );
  }
});

module.exports = Dashboard;
