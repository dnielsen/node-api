/** @jsx React.DOM */

var Header = require('../../../../common/header.jsx');
var Sidebar = require('../../../../common/sidebar.jsx');
var Footer = require('../../../../common/footer.jsx');

var Doc = require('./doc_container.jsx');
var DocUnit = Doc.DocUnit;
var DocContainer = Doc.DocContainer;

var Body = React.createClass({
  componentDidMount: function() {
    Prism.highlightAll();
  },
  render: function() {
    return (
      <Container id='body'>
        <DocContainer>
          <DocUnit name='Bootstrap: Navs'>
            <h4 className='fg-black50'>Basic Example</h4>
            <p>
              {"Extend "}<code>Input</code>{" components by adding text or buttons before, after, or on both sides of any text-based input. Use "}<code>InputGroup</code>{" with an "}<code>InputGroupAddon</code>{" to prepend or append elements to a single "}<code>Input</code>.
            </p>
            <Well className='bg-white'>
              <InputGroup>
                <InputGroupAddon>@</InputGroupAddon>
                <Input type='text' placeholder='Username'/>
              </InputGroup><br/>
              <InputGroup>
                <Input type='text'/>
                <InputGroupAddon>.00</InputGroupAddon>
              </InputGroup><br/>
              <InputGroup>
                <InputGroupAddon>$</InputGroupAddon>
                <Input type='text'/>
                <InputGroupAddon>.00</InputGroupAddon>
              </InputGroup>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<InputGroup>\n"}
                  {"  <InputGroupAddon>@</InputGroupAddon>\n"}
                  {"  <Input type='text' placeholder='Username'/>\n"}
                  {"</InputGroup><br/>\n"}
                  {"<InputGroup>\n"}
                  {"  <Input type='text'/>\n"}
                  {"  <InputGroupAddon>.00</InputGroupAddon>\n"}
                  {"</InputGroup><br/>\n"}
                  {"<InputGroup>\n"}
                  {"  <InputGroupAddon>$</InputGroupAddon>\n"}
                  {"  <Input type='text'/>\n"}
                  {"  <InputGroupAddon>.00</InputGroupAddon>\n"}
                  {"</InputGroup>\n"}
                </code>
              </pre>
            </div>
            <hr/>
          </DocUnit>
        </DocContainer>
        {this.props.children}
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var NavDocs = React.createClass({
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

module.exports = NavDocs;
