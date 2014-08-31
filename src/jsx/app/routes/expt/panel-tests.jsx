/** @jsx React.DOM */

'use strict';

var loremipsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

var home = "Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.";

var profile = "Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.";

var settings = "Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.";

var PanelTests = React.createClass({
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

        chart.extent = [1297110663*850+(86400000*20*(.35*40)), 1297110663*850+(86400000*20*(.66*40))];

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
            hideAxis: true,
            hideLegend: true,
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
                    tickCount: 10,
                    label: 'Time'
                },
                y:  {
                    type: 'linear',
                    tickFormat: 'd',
                    label: 'Visitors'
                }
            },
            tooltip: {
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
      <Container>
        <Grid>
          <Row>
            <Col xs={12}>
              <h3>Panel tests</h3>
            </Col>
          </Row>
        </Grid>
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
                          {loremipsum}
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
                          {loremipsum}
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
                          {loremipsum}
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
                          {loremipsum}
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
                              <p>{home}</p>
                            </TabPane>
                            <TabPane ref='panel_tab_header:profile'>
                              <p>{profile}</p>
                            </TabPane>
                            <TabPane ref='panel_tab_header:settings'>
                              <p>{settings}</p>
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
                              <p>{home}</p>
                            </TabPane>
                            <TabPane ref='panel_tab_footer:profile'>
                              <p>{profile}</p>
                            </TabPane>
                            <TabPane ref='panel_tab_footer:settings'>
                              <p>{settings}</p>
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
                <Panel horizontal>
                  <PanelLeft className='bg-red fg-white tabs' style={{width: '75px'}}>
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
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent>
                            <TabPane ref='panel_tab_panel_left:home' active>
                              <p>{home}</p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_left:profile'>
                              <p>{profile}</p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_left:settings'>
                              <p>{settings}</p>
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
                <Panel horizontal>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent>
                            <TabPane ref='panel_tab_panel_right:home' active>
                              <p>{home}</p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_right:profile'>
                              <p>{profile}</p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_right:settings'>
                              <p>{settings}</p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelRight className='bg-orange fg-darkorange tabs' style={{width: '75px'}}>
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
                <Panel horizontal>
                  <PanelLeft className='bg-red fg-white tabs' style={{width: '75px'}}>
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
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent>
                            <TabPane ref='panel_tab_panel_combined:home' active>
                              <h4>Left Panel</h4>
                              <p>{home}</p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_combined:profile'>
                              <h4>Left Panel</h4>
                              <p>{profile}</p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_combined:settings'>
                              <h4>Left Panel</h4>
                              <p>{settings}</p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_combined:table'>
                              <h4>Right Panel</h4>
                              <p>{home}</p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_combined:archive'>
                              <h4>Right Panel</h4>
                              <p>{profile}</p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_combined:landscape'>
                              <h4>Right Panel</h4>
                              <p>{settings}</p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelRight className='bg-purple fg-white tabs' style={{width: '75px'}}>
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
                  <PanelHeader>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <div id='main-chart'></div>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                </Panel>
                <Panel horizontal>
                  <PanelLeft className='bg-red fg-white tabs' style={{width: '75px'}}>
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
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent>
                            <TabPane ref='panel_tab_panel_combined_plain:home' active>
                              <div id='male-female-chart'></div>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_combined_plain:profile'>
                              <h4>Left Panel</h4>
                              <p>{profile}</p>
                            </TabPane>
                            <TabPane ref='panel_tab_panel_combined_plain:settings'>
                              <h4>Left Panel</h4>
                              <p>{settings}</p>
                            </TabPane>
                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelRight className='bg-lightgreen fg-white tabs' style={{width: '200px'}}>
                    <Grid>
                      <Row>
                        <Col xs={12} className='text-center'>
                          <br/>
                          <div>
                            <h4>Gross Revenue</h4>
                            <h2 className='fg-green'>9,362.74</h2>
                          </div>
                          <hr/>
                          <div>
                            <h4>Net Revenue</h4>
                            <h2 className='fg-green'>6,734.89</h2>
                          </div>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelRight>
                  <PanelRight className='bg-green fg-lightgreen tabs' style={{width: '350px'}}>
                    <Grid>
                      <Row>
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
      </Container>
    );
  }
});

module.exports = PanelTests;
