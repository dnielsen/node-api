/** @jsx React.DOM */

var Brand = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <NavHeader>
        <NavBrand tabIndex='-1'>
          <img src='/imgs/logo.png' alt='rubix' width='111' />
        </NavBrand>
      </NavHeader>
    );
  }
});

var LocaleMenuItem = React.createClass({
  render: function() {
    return (
      <MenuItem flag={this.props.flag} locale={this.props.locale} parent={this.props.parent} href='#' active={this.props.active}>
        <Grid>
          <Row>
            <Col xs={2}>
              <img src={'/imgs/flags/flags/flat/32/'+this.props.flag+'.png'} width='32' height='32' />
            </Col>
            <Col xs={10}>
              <Entity className='lang-menu-text' entity='languageMenu' data={{lang: this.props.lang}} />
            </Col>
          </Row>
        </Grid>
      </MenuItem>
    );
  }
});

var Navigation = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <NavContent className='pull-right'>
        <Nav>
          <NavItem className='logout' href='#'>
            <Icon bundle='fontello' glyph='off-1' />
          </NavItem>
        </Nav>
      </NavContent>
    );
  }  
});

var Header = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <Grid id='navbar'>
        <Row>
          <Col xs={12}>
            <NavBar fixedTop id='rubix-nav-header'>
              <Container fluid>
                <Row>
                  <Col xs={3} visible='xs'>
                    <SidebarBtn />
                  </Col>
                  <Col xs={6} sm={4}>
                    <Brand />
                  </Col>
                  <Col xs={3} sm={8}>
                    <Navigation pressed={this.props.pressed} />
                  </Col>
                </Row>
              </Container>
            </NavBar>
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = Header;
