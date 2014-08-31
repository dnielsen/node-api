/** @jsx React.DOM */

var Footer = React.createClass({
  render: function() {
    return (
      <div>
        <Grid gutterBottom></Grid>
        <Grid id='footer' className='text-center'>
          <Row>
            <Col xs={12}>
              <div>© 2014 SketchPixy Creative</div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = Footer;
