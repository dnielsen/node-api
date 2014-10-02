/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var xml = require('raw!./xml.txt');

var Body = React.createClass({
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
      <Modal lg onShown={highlightAll}>
        <ModalHeader>
          <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
          <h4 className='modal-title'>Event Data Viewer</h4>
        </ModalHeader>
        <ModalBody>
          <pre style={{margin: 0}}>
            <code className='language-markup'>
              {xml}
            </code>
          </pre>
        </ModalBody>
      </Modal>
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
      master_detail: true
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

    function renderChart() {
      var start = moment().subtract(7, 'days').format('YYYY-MM-DD H:M:S');
      var end = moment().format('YYYY-MM-DD H:M:S');
      $.get('/activities/timestamp/'+start+'/'+end, function(result) {
        var data = [], aggregate = {}, x;
        for(var i=0; i < result.length; i++) {
          data.push({
            x: i,
            xValue: moment(new Date(result[i].x)).toDate().getTime(),
            y: result[i].y
          });
        }
        console.log(data);
        var start = Math.floor(data.length / 4);
        if(start >= 1) {
          // console.log(daterangepicker.data('daterangepicker').startDate.toDate().getTime(), data[data.length-1-start].x, data[data.length-1].x)
          if(daterangepicker.data('daterangepicker').startDate.toDate().getTime() > data[data.length-1].xValue) return $('#main-chart').css('visibility', 'hidden');
          $('#main-chart').css('visibility', 'visible');
          var min = data[data.length-1-start].x;
          var max = data[data.length-1].x;
          chart.extent = [data[data.length-1-start].x, max];
        }
        activities.addData(data);
      });
    }

    var daterangepicker = $(this.refs.daterangepicker.getDOMNode());
    daterangepicker.daterangepicker({
      timePicker: true,
      timePickerIncrement: 30,
      format: 'YYYY-MM-DD H:M:S',
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
      startDate: moment().subtract(1, 'day'),
      endDate: moment()
    }, function(start, end) {
      $('#searchinput').val(start.format('YYYY-MM-DD H:M:S') + ' to ' + end.format('YYYY-MM-DD H:M:S'));
      var table = $('#example').DataTable();
      table.draw();
    });
    $('#searchinput').val(daterangepicker.data('daterangepicker').startDate.format('YYYY-MM-DD H:M:S') + ' to ' + daterangepicker.data('daterangepicker').endDate.format('YYYY-MM-DD H:M:S'));
    $(this.refs.icon.getDOMNode()).attr('class', 'rubix-icon icon-fontello-calendar');
    $('#example')
      .addClass('nowrap')
      .DataTable({
        responsive: true,
        processing: true,
        serverSide: true,
        ajax: function(data, callback, settings) {
          data.range = {
            start: daterangepicker.data('daterangepicker').startDate.format('YYYY-MM-DD H:M:S'),
            end: daterangepicker.data('daterangepicker').endDate.format('YYYY-MM-DD H:M:S'),
            column: 'timestamp'
          };
          $.post('/data-source/activities', data, function(d) {
            this.setState({
              events: d.events,
              objects: d.objects
            });
            callback(d);
            renderChart();
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
  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer>
                <Panel>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={7}>
                          <h3 style={{margin: 0}}>Live Data Feed</h3>
                        </Col>
                        <Col xs={5} className='text-right'>
                          <InputGroup className='date' ref='daterangepicker'>
                            <Input id='searchinput' type='text' className='form-control' disabled />
                            <InputGroupAddon>
                              <Icon ref='icon' glyph='icon-fontello-calendar' />
                            </InputGroupAddon>
                          </InputGroup>
                        </Col>
                      </Row>
                    </Grid>
                    <div id='main-chart'></div>
                  </PanelBody>
                </Panel>
              </PanelContainer>
              <PanelContainer>
                <Panel>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3 style={{margin: 0, marginBottom: 25}}>Filter Event History</h3>
                        </Col>
                      </Row>
                    </Grid>
                    <Grid>
                      <Row>
                        <Col xs={4}>
                          <Select onChange={this.handleEvents}>
                            <option>All events</option>
                            {this.state.events.map(function(ev, i) {
                              return <option value={ev.process_name} key={'event-'+i}>{ev.process_name}</option>
                            })}
                          </Select>
                        </Col>
                        <Col xs={4} collapseLeft>
                          <Select onChange={this.handleObjects}>
                            <option>Select an object</option>
                            {this.state.objects.map(function(ob, i) {
                              return <option value={ob.protocol} key={'object-'+i}>{ob.protocol}</option>
                            })}
                          </Select>
                        </Col>
                        <Col xs={4} collapseLeft className='text-right'>
                          <Input type='text' placeholder='Enter an Object ID or File Name' onChange={this.handleObjectIDSearch} />
                        </Col>
                      </Row>
                    </Grid>
                    <hr/>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Table id='example' className='display' cellSpacing='0' width='100%'>
                            <thead>
                              <tr>
                                <th>Timestamp</th>
                                <th>Event</th>
                                <th>Object</th>
                                <th>Format</th>
                                <th>Action</th>
                                <th>Status</th>
                                <th>Event Data</th>
                              </tr>
                            </thead>
                            <tfoot>
                              <tr>
                                <th>Timestamp</th>
                                <th>Event</th>
                                <th>Object</th>
                                <th>Format</th>
                                <th>Action</th>
                                <th>Status</th>
                                <th>Event Data</th>
                              </tr>
                            </tfoot>
                          </Table>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
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
  mixins: [SidebarMixin],
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
