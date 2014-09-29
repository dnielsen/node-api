/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

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
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
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
                        <Col xs={3}>
                          <Select onChange={this.handleEvents}>
                            <option>All events</option>
                            {this.state.events.map(function(ev, i) {
                              return <option value={ev.process_name} key={'event-'+i}>{ev.process_name}</option>
                            })}
                          </Select>
                        </Col>
                        <Col xs={3} collapseLeft>
                          <Select onChange={this.handleObjects}>
                            <option>Select an object</option>
                            {this.state.objects.map(function(ob, i) {
                              return <option value={ob.protocol} key={'object-'+i}>{ob.protocol}</option>
                            })}
                          </Select>
                        </Col>
                        <Col xs={3} collapseLeft className='text-right'>
                          <Input type='text' placeholder='Enter an Object ID or File Name' onChange={this.handleObjectIDSearch} />
                        </Col>
                        <Col xs={3} collapseLeft>
                          <InputGroup className='date' ref='datetimepicker1'>
                            <Input id='searchinput' type='text' className='form-control' />
                            <InputGroupAddon>
                              <Icon ref='icon' glyph='icon-fontello-calendar' />
                            </InputGroupAddon>
                          </InputGroup>
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
