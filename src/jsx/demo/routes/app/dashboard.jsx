/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  handleEvents: function(e) {
    var table = $('#example').DataTable();
    var value = e.target.value === 'All events' ? '' : e.target.value;
    table.column(1).search(value, true, false).draw();
  },
  componentDidMount: function() {
    var maxDate = 0;
    $(this.refs.datetimepicker1.getDOMNode()).datetimepicker().on("dp.change",function (e) {
      var table = $('#example').DataTable();
      var date = e.date.format("lll");
      table.column(0).search(date, true, false).draw();
    });
    $(this.refs.icon.getDOMNode()).attr('class', 'rubix-icon icon-fontello-calendar');
    $('#example')
      .addClass('nowrap')
      .dataTable({
        responsive: true,
        processing: true,
        ajax: function(data, callback, settings) {
          $.get('/activities', function(data) {
            callback(data);
          });
        },
        columns: [
          {data: 'timestamp'},
          {data: 'process_name'},
          {data: 'protocol'},
          {data: 'format'},
          {data: 'action'},
          {data: 'status'}
        ],
        aoColumnDefs: [
          {
            aTargets: [0],
            sType: 'date',
            mRender: function(data, type, full) {
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
          }
        ],
        columnDefs: [
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
                            <option value='Generate IDOC'>Generate IDOC</option>
                            <option value='Receive MasterBillOfLading'>Receive MasterBillOfLading</option>
                          </Select>
                        </Col>
                        <Col xs={3} collapseLeft>
                          <Select>
                            <option>Select an object</option>
                            <option value='shipped-loads'>TBD</option>
                          </Select>
                        </Col>
                        <Col xs={3} collapseLeft className='text-right'>
                          <Input type='text' placeholder='Enter an Object ID or File Name' />
                        </Col>
                        <Col xs={3} collapseLeft>
                          <InputGroup className='date' ref='datetimepicker1'>
                            <Input type='text' className='form-control' />
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
