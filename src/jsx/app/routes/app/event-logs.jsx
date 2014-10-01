/** @jsx React.DOM */

var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var xml = require('raw!./xml.txt');

var BusinessObjectsTable = React.createClass({
  componentDidMount: function() {
    $(this.refs.nestedtable.getDOMNode()).DataTable({
      lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, 'All']],
      columnDefs: [
        {targets: [0], visible: false},
        {
          targets: [3],
          render: function(data, type, full) {
            if(data === 'TRUE')
              return React.renderComponentToString(<div className='fg-blue'>TRUE</div>)
            else
              return React.renderComponentToString(<div className='fg-darkgray50'>FALSE</div>)
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
      <Container>
        <Table ref='nestedtable' className='display' cellSpacing='0' width='100%'>
          <thead>
            <tr style={{background: 'white'}}>
              <th></th>
              <th>Object Type</th>
              <th>Object Value</th>
              <th>Primary Key</th>
            </tr>
          </thead>
          <tbody>
            {data.map(function(d, i) {
              return (
                <tr key={'event-tr-'+i}>
                  <td>{d.id}</td>
                  <td>{d.ot}</td>
                  <td>{d.ov}</td>
                  <td>{d.pk}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr style={{background: 'white'}}>
              <th></th>
              <th>Object Type</th>
              <th>Object Value</th>
              <th>Primary Key</th>
            </tr>
          </tfoot>
        </Table>
        <br/>
      </Container>
    );
  }
});

var DataView = React.createClass({
  getModal: function() {
    var highlightAll = function() {
      Prism.highlightAll();
    };

    return (
      <Modal lg onShown={highlightAll}>
        <ModalHeader>
          <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
          <Grid>
            <Row>
              <Col xs={3} collapseLeft collapseRight>
                <h4 className='modal-title' style={{display: 'inline'}}>Document Viewer</h4>{' '}
                <Button bsStyle='blue' outlined onlyOnHover><Icon glyph='icon-fontello-download'/></Button>
              </Col>
              <Col xs={9}></Col>
            </Row>
          </Grid>
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
  handlePreview: function(e) {
    e.preventDefault();
    e.stopPropagation();
    ModalManager.create.bind(this, this.getModal())();
  },
  render: function() {
    return (
      <Grid>
        <Row>
          <Col xs={6} collapseLeft collapseRight>
            <h4>Input: <Link href='#'>shipment_0232_in.dat</Link></h4>
            <dl className='dl-horizontal'>
              <dt style={{textAlign: 'left'}}>Kind:</dt>
              <dd>Document</dd>
              <dt style={{textAlign: 'left'}}>Size:</dt>
              <dd>5.3 MB</dd>
              <dt style={{textAlign: 'left'}}>File:</dt>
              <dd><a href='#' onClick={this.handlePreview}>Preview</a></dd>
              <dt style={{textAlign: 'left'}}>Created:</dt>
              <dd>September 21, 2014 at 12:47 PM</dd>
              <dt style={{textAlign: 'left'}}>Process Time:</dt>
              <dd>321 ms (0.3 seconds)</dd>
            </dl>
          </Col>
          <Col xs={6} collapseLeft collapseRight>
            <h4>Output: <a href='#'>Load_Import_0032888402084.xml</a></h4>
            <dl className='dl-horizontal'>
              <dt style={{textAlign: 'left'}}>Kind:</dt>
              <dd>XML Document</dd>
              <dt style={{textAlign: 'left'}}>Size:</dt>
              <dd>111 KB</dd>
              <dt style={{textAlign: 'left'}}>File:</dt>
              <dd><a href='#' onClick={this.handlePreview}>Preview</a></dd>
              <dt style={{textAlign: 'left'}}>Created:</dt>
              <dd>September 21, 2014 at 12:47 PM</dd>
              <dt style={{textAlign: 'left'}}>Process Time:</dt>
              <dd>321 ms (0.3 seconds)</dd>
            </dl>
          </Col>
        </Row>
      </Grid>
    );
  }
});

var Detail = React.createClass({
  render: function() {
    return (
      <Container className='text-left'>
        <Grid>
          <Row>
            <Col xs={12}>
              <h5>Event Details: (<span className='fg-davygray'>99559830-3f73-11e4-9f10-7056818cadd9</span>)</h5>
            </Col>
          </Row>
          <Row>
            <Col xs={12} style={{paddingTop: 12.5}}>
              <TabList bsStyle=''>
                <Tab pane={'el-'+this.props.key+':bo'} active>Business Objects</Tab>
                <Tab pane={'el-'+this.props.key+':data'}>Data</Tab>
                <Tab pane={'el-'+this.props.key+':service'}>Service Calls</Tab>
              </TabList>
            </Col>
          </Row>
        </Grid>
        <Grid>
          <Row>
            <Col xs={12} style={{paddingTop: 12.5}}>
              <TabContent>
                <TabPane ref={'el-'+this.props.key+':bo'} active>
                  <BusinessObjectsTable/>
                </TabPane>
                <TabPane ref={'el-'+this.props.key+':data'}>
                  <DataView/>
                </TabPane>
                <TabPane ref={'el-'+this.props.key+':service'}>
                  <p><LoremIpsum query='3s' /></p>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var Body = React.createClass({
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
          {data: 'event_log_id', visible: false},
          {data: 'timestamp'},
          {data: 'severity'},
          {data: 'workflow'},
          {data: 'process'},
          {data: 'object'},
          {data: 'object_id'}
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
              React.renderComponent(<Detail key={id} />, mountedComponents['drilled-down-content-'+id]);
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
              return React.renderComponentToString(<a className='drill-down' data-id={data.event_log_id} href='#'><Icon glyph='icon-feather-plus'/></a>);
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
                return React.renderComponentToString(<div className='fg-success'>OK</div>)
              else
                return React.renderComponentToString(<div className='fg-deepred'>FAIL</div>)
            }
          }
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
                          <h3 style={{margin: 0, marginBottom: 25}}>Event Logs</h3>
                        </Col>
                      </Row>
                    </Grid>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Table id='example' className='display' cellSpacing='0' width='100%'>
                            <thead>
                              <tr>
                                <th></th>
                                <th></th>
                                <th>Timestamp</th>
                                <th>Severity</th>
                                <th>Workflow</th>
                                <th>Process</th>
                                <th>Object</th>
                                <th>Object ID</th>
                              </tr>
                            </thead>
                            <tfoot>
                              <tr>
                                <th></th>
                                <th></th>
                                <th>Timestamp</th>
                                <th>Severity</th>
                                <th>Workflow</th>
                                <th>Process</th>
                                <th>Object</th>
                                <th>Object ID</th>
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
var EventLogs = React.createClass({
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

module.exports = EventLogs;
