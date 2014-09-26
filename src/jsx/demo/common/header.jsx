/** @jsx React.DOM */

var Brand = React.createClass({
  render: function() {
    return this.transferPropsTo(
      <NavHeader>
        <NavBrand tabIndex='-1'>
          <img src='/imgs/logo.png' alt='rubix' width='111' height='28' />
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

var Skins = React.createClass({
  statics: {
    skins: ['default', 'green', 'blue', 'purple', 'brown', 'cyan']
  },
  switchSkin: function(skin, e) {
    e.preventDefault();
    e.stopPropagation();
    for(var i=0; i < Skins.skins.length; i++) {
      $('html').removeClass(Skins.skins[i]);
    }
    $('html').addClass(skin);
    vex.close(this.props.id);
  },
  render: function() {
    return (
      <Grid style={{margin: '-2em'}}>
        <Row>
          <Col xs={12} className='text-center bg-darkgrayishblue75' style={{marginBottom: 25}}>
            <div className='fg-white' style={{fontSize: 24, lineHeight: 1, padding: '25px 10px'}}>
              Choose a theme:
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'default')}>
              <Icon glyph='icon-fontello-stop icon-4x' style={{color: '#E76049'}} />
            </a>
          </Col>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'green')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-darkgreen45' />
            </a>
          </Col>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'blue')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-blue' />
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'purple')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-purple' />
            </a>
          </Col>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'brown')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-brown' />
            </a>
          </Col>
          <Col xs={4} className='text-center'>
            <a href='#' style={{border: 'none'}} onClick={this.switchSkin.bind(this, 'cyan')}>
              <Icon glyph='icon-fontello-stop icon-4x' className='fg-darkcyan' />
            </a>
          </Col>
        </Row>
      </Grid>
    );
  }
});

var Navigation = React.createClass({
  getInitialState: function() {
    return {
      selectedFlag: 'United-States'
    };
  },
  handleSkinSwitch: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var vexContent;
    vex.dialog.open({
      afterOpen: function($vexContent) {
        vexContent = $vexContent;
        return React.renderComponent(<Skins id={$vexContent.data().vex.id} />, $vexContent.get(0));
      },
      afterClose: function() {
        React.unmountComponentAtNode(vexContent);
      }
    });
  },
  handleLayoutRadioChange: function(e) {
    var dir = e.target.value;
    var current_dir = $('html').attr('dir');
    window.location.href = window.location.href.replace(current_dir, dir);
  },
  bodyLayoutRadioChange: function(value) {
    if(!value) return;
    if(value === 'fixed-body') {
      $('html').removeClass('static');
      localStorage.setItem('bodyLayout', 'fixed-body');
      ReactBootstrap.Dispatcher.emit('sidebar:reinitialize');
    } else if(value === 'static-body') {
      $('html').addClass('static');
      localStorage.setItem('bodyLayout', 'static-body');
      ReactBootstrap.Dispatcher.emit('sidebar:destroy');
    }
    this.refs[value].setChecked(true);
  },
  handleBodyLayoutRadioChange: function(e) {
    this.bodyLayoutRadioChange(e.target.value);
  },
  changeFlag: function(props) {
    this.setState({
      selectedFlag: props.flag
    }, function() {
      if(props.locale === 'ar')
        $('html').addClass('arabic');
      else
        $('html').removeClass('arabic');
      Preloader.show();
      l20n.changeLocale(props.locale);
    }.bind(this));
  },
  l20nContextReady: function() {
    var selectedFlag = l20n.ctx.getSync('selectedFlag');
    this.state.selectedFlag = selectedFlag;
    this.refs['flag-menu'].selectItem('flag', selectedFlag);
    this.setState(this.state, function() {
      Preloader.hide();
    });
  },
  componentWillMount: function() {
    ReactBootstrap.Dispatcher.on('ctx:ready', this.l20nContextReady);
  },
  componentWillUnmount: function() {
    ReactBootstrap.Dispatcher.off('ctx:ready', this.l20nContextReady);
  },
  render: function() {
    return this.transferPropsTo(
      <NavContent className='pull-right'>
        <Nav className='hidden-xs'>
          <NavItem divider />
          <NavItem className='hidden-sm'>
            <a href='#' onClick={this.handleSkinSwitch}>
              <Icon glyph='icon-fontello-circle' className='fg-theme' style={{lineHeight: 1, fontSize: 24 }} />
            </a>
          </NavItem>
          <NavItem divider />
          <NavItem dropdown>
            <DropdownButton id='flag-menu-btn' nav toggleOnHover container={this} menu='flag-menu'>
              <img src={'/imgs/flags/flags/flat/32/' + this.state.selectedFlag + '.png'} width='32' height='32' />
            </DropdownButton>
            <Menu alignRight noTimer bsStyle='theme' ref='flag-menu' id='flag-menu' className='double-width' onItemSelect={this.changeFlag}  style={{paddingBottom: 0}}>
              <MenuItem header>
                <Entity entity='languageMenuHeading'/>
              </MenuItem>
              <LocaleMenuItem lang='enUS' locale='en-US' flag='United-States'/>
              <LocaleMenuItem lang='fr' locale='fr' flag='France'/>
              <LocaleMenuItem lang='it' locale='it' flag='Italy'/>
              <LocaleMenuItem lang='ge' locale='ge' flag='Germany'/>
              <LocaleMenuItem lang='ar' locale='ar' flag='Saudi-Arabia'/>
              <LocaleMenuItem lang='ch' locale='ch' flag='China'/>
            </Menu>
          </NavItem>
        </Nav>
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
