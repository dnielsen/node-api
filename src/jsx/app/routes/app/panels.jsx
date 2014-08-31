/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  componentDidMount: function() {
    (function() {
        var chart = new Rubix("#main-chart", {
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
                    label: 'Total Users',
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
                left: 25,
                top: 50,
                right: 25
            },
            interpolate: 'linear'
        });

        var total_users = chart.area_series({
            name: 'Total Users',
            color: '#2EB398',
            marker: 'circle',
            fillopacity: 0.7,
            noshadow: true
        });

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
            },
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
        ])
    })();
    (function() {
        var chart = new Rubix('#male-female-chart', {
            height: 200,
            title: 'Male VS Female',
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
                    tickFormat: 'd',
                    label: 'Visitors'
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
            name: 'Male',
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
            name: 'Female',
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
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={4} smCollapseRight>
              <PanelContainer>
                <Panel>
                  <PanelHeader>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Awesome Heading</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            <LoremIpsum query='5s' />
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={4} smCollapseRight>
              <PanelContainer>
                <Panel>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            <LoremIpsum query='5s' />
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-red'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h3>Awesome Footer but no Heading</h3>
                          <h6>Mini Heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={4}>
              <PanelContainer controlStyles='bg-green fg-white'>
                <Panel>
                  <PanelHeader className='bg-green'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h3>Awesome Heading</h3>
                          <h6>Mini Heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            <LoremIpsum query='5s' />
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col sm={4} smCollapseRight>
              <PanelContainer controlStyles='bg-blue fg-white'>
                <Panel>
                  <PanelHeader className='bg-blue'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h3>Awesome Heading</h3>
                          <h6>Mini Heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>
                            <LoremIpsum query='5s' />
                          </p>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-lightblue'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h3>Awesome Footer</h3>
                          <h6>Mini heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={4} smCollapseRight>
              <PanelContainer controlStyles='bg-purple fg-white'>
                <Panel>
                  <PanelHeader className='bg-purple fg-white tabs'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Hello world!</h3>
                        </Col>
                      </Row>
                    </Grid>
                    <TabContainer className='plain'>
                      <TabList>
                        <Tab pane='panel_tab_header:home' active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab pane='panel_tab_header:profile'>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab pane='panel_tab_header:settings'>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                        <Tab>
                          <DropdownButton tab container={this} menu='panel_tab_header_menu'>
                            <Icon bundle='fontello' glyph='angle-down'/>
                          </DropdownButton>
                          <Menu alignRight ref='panel_tab_header_menu'>
                            <MenuItem href='#'>
                              <Tab dropdown pane='panel_tab_header:fat'>
                                @fat
                              </Tab>
                            </MenuItem>
                            <MenuItem href='#'>
                              <Tab dropdown pane='panel_tab_header:mdo'>
                                @mdo
                              </Tab>
                            </MenuItem>
                          </Menu>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent>
                            <TabPane ref='panel_tab_header:home' active>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane ref='panel_tab_header:profile'>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane ref='panel_tab_header:settings'>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane ref='panel_tab_header:fat'>
                              <p>
                                <h3>FAT</h3>
                              </p>
                            </TabPane>
                            <TabPane ref='panel_tab_header:mdo'>
                              <p>
                                <h3>MDO</h3>
                              </p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-lightpurple'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h3>Awesome Footer</h3>
                          <h6>Mini heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={4}>
              <PanelContainer controlStyles='bg-palepink fg-white'>
                <Panel>
                  <PanelHeader className='bg-palepink'>
                    <Grid>
                      <Row>
                        <Col xs={12} className='fg-white'>
                          <h3>Awesome Footer</h3>
                          <h6>Mini heading</h6>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent>
                            <TabPane ref='panel_tab_footer:home' active>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane ref='panel_tab_footer:profile'>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane ref='panel_tab_footer:settings'>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane ref='panel_tab_footer:fat'>
                              <p>
                                <h3>FAT</h3>
                              </p>
                            </TabPane>
                            <TabPane ref='panel_tab_footer:mdo'>
                              <p>
                                <h3>MDO</h3>
                              </p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-palepink fg-white tabs'>
                    <TabContainer className='plain'>
                      <TabList>
                        <Tab pane='panel_tab_footer:home' active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab pane='panel_tab_footer:profile'>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab pane='panel_tab_footer:settings'>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                        <Tab className='dropup'>
                          <DropdownButton tab container={this} menu='panel_tab_footer_menu'>
                            <Icon bundle='fontello' glyph='angle-up'/>
                          </DropdownButton>
                          <Menu alignRight ref='panel_tab_footer_menu'>
                            <MenuItem href='#'>
                              <Tab dropdown pane='panel_tab_footer:fat'>
                                @fat
                              </Tab>
                            </MenuItem>
                            <MenuItem href='#'>
                              <Tab dropdown pane='panel_tab_footer:mdo'>
                                @mdo
                              </Tab>
                            </MenuItem>
                          </Menu>
                        </Tab>
                      </TabList>
                    </TabContainer>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h1>Hello world</h1>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col sm={6} smCollapseRight>
              <PanelContainer>
                <Panel horizontal className='force-collapse'>
                  <PanelLeft className='bg-red fg-white tabs panel-sm-2'>
                    <TabContainer>
                      <TabList>
                        <Tab pane='panel_tab_panel_left:home' active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_left:profile'>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_left:settings'>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelLeft>
                  <PanelBody className='panel-sm-10'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent>
                            <TabPane ref='panel_tab_panel_left:home' active>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_left:profile'>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_left:settings'>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={6}>
              <PanelContainer>
                <Panel horizontal className='force-collapse'>
                  <PanelBody className='panel-sm-10'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent>
                            <TabPane ref='panel_tab_panel_right:home' active>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_right:profile'>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_right:settings'>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelRight className='bg-orange fg-darkorange tabs panel-sm-2'>
                    <TabContainer>
                      <TabList>
                        <Tab pane='panel_tab_panel_right:home' active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_right:profile'>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_right:settings'>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelRight>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer>
                <Panel horizontal className='force-collapse'>
                  <PanelLeft className='bg-red fg-white tabs panel-sm-1'>
                    <TabContainer>
                      <TabList>
                        <Tab pane='panel_tab_panel_combined:home' active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_combined:profile'>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_combined:settings'>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelLeft>
                  <PanelBody className='panel-sm-10'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent>
                            <TabPane ref='panel_tab_panel_combined:home' active>
                              <h4>Left Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_combined:profile'>
                              <h4>Left Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_combined:settings'>
                              <h4>Left Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_combined:table'>
                              <h4>Right Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_combined:archive'>
                              <h4>Right Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_combined:landscape'>
                              <h4>Right Panel</h4>
                              <p><LoremIpsum query='2s'/></p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelRight className='bg-purple fg-white tabs panel-sm-1'>
                    <TabContainer>
                      <TabList>
                        <Tab pane='panel_tab_panel_combined:table'>
                          <Icon bundle='fontello' glyph='th'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_combined:archive'>
                          <Icon bundle='fontello' glyph='archive'/>
                        </Tab>
                        <Tab pane='panel_tab_panel_combined:landscape'>
                          <Icon bundle='fontello' glyph='docs-landscape'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelRight>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer>
                <Panel>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <div id='main-chart'></div>
                        </Col>
                      </Row>
                    </Grid>
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
                  <PanelBody className='panel-sm-4'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent>
                            <TabPane ref='panel_tab_panel_combined_plain:home' active>
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
                  <PanelRight className='bg-darkgreen45 fg-green panel-sm-4'>
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
                        <Col xs={12} className='bg-green fg-lightgreen'>
                          <div id='alert-chart' className='rubix-chart'></div>
                        </Col>
                      </Row>
                    </Grid>
                    <Grid>
                      <Row>
                        <Col xs={12} className='bg-lightgreen fg-darkgreen45 text-center'>
                          <h5>Grid with different color!</h5>
                        </Col>
                      </Row>
                    </Grid>
                    <Grid>
                      <Row>
                        <Col xs={12} className='text-center'>
                          <h5>Grid with yet another color!</h5>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelRight>
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
var Panels = React.createClass({
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

module.exports = Panels;
