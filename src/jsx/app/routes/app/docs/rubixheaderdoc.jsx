/** @jsx React.DOM */
/** @jsx React.DOM */

var Header = require('../../../common/header.jsx');
var Sidebar = require('../../../common/sidebar.jsx');
var Footer = require('../../../common/footer.jsx');

var Doc = require('./bootstrap/doc_container.jsx');
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
          <DocUnit name='Rubix: Header Documentation'>
            <h4 className='fg-black50'>Basic Example</h4>
            <p>
              {"Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages."}
            </p>
            <Well>
              <Alert success>
                <strong>Well done!</strong> You successfully read this important alert message.
              </Alert>
              <Alert info>
                <strong>Heads up!</strong>{" This alert needs your attention, but it's not super important."}
              </Alert>
              <Alert warning>
                <strong>Warning!</strong>{" Better check yourself, you're not looking too good."}
              </Alert>
              <Alert danger collapseBottom>
                <strong>Oh snap!</strong> Change a few things up and try submitting again.
              </Alert>
            </Well>
            <div>
              <pre>
                <code className='language-markup'>
                  {"<Alert success>\n"}
                  {"  <strong>Well done!</strong> You successfully read this important alert message.\n"}
                  {"</Alert>\n"}
                  {"<Alert info>\n"}
                  {"  <strong>Heads up!</strong>{\" This alert needs your attention, but it's not super important.\"}\n"}
                  {"</Alert>\n"}
                  {"<Alert warning>\n"}
                  {"  <strong>Warning!</strong>{\" Better check yourself, you're not looking too good.\"}\n"}
                  {"</Alert>\n"}
                  {"<Alert danger collapseBottom>\n"}
                  {"  <strong>Oh snap!</strong>Change a few things up and try submitting again.\n"}
                  {"</Alert>\n"}
                </code>
              </pre>
            </div>
          </DocUnit>
        </DocContainer>
        {this.props.children}
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var RubixHeaderDocs = React.createClass({
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

module.exports = RubixHeaderDocs;
