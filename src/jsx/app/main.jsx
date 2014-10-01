/** @jsx React.DOM */

'use strict';

/* Initialize Locales */
l20n.initializeLocales('app', {
  'locales': ['en-US', 'fr', 'it', 'ge', 'ar', 'ch'],
  'default': 'en-US'
});

/* Initializing touch events */
React.initializeTouchEvents(true);

require('./preloader.jsx');

/* ERROR PAGES */
var notfound = require('./routes/notfound.jsx');

/* APP PAGES */
var dashboard = require('./routes/app/dashboard.jsx');
var connectors = require('./routes/app/connectors.jsx');
var apimanager = require('./routes/app/api-manager.jsx');
var systemperformance = require('./routes/app/system-performance.jsx');
var eventlogs = require('./routes/app/event-logs.jsx');

/* ROUTES */
var routes = (
  <Routes>
    <Route name='root' path='/' view={dashboard}>
      <Route name='app' path='app'>
        <Route name='dashboard' path='dashboard' view={dashboard} />
        <Route name='connectors' path='connectors' view={connectors} />
        <Route name='api-manager' path='api-manager' view={apimanager} />
        <Route name='system-performance' path='system-performance' view={systemperformance} />
        <Route name='event-logs' path='event-logs' view={eventlogs} />
      </Route>

      <Route name='notfound' path='/404' view={notfound} />
    </Route>
  </Routes>
);

Pace.once('hide', function() {
  $('#pace-loader').removeClass('pace-big').addClass('pace-small');
});

var InitializeRouter = function(View) {
  // cleanup
  if(window.Rubix) window.Rubix.Cleanup();
  Pace.restart();
  if(window.hasOwnProperty('ga') && typeof window.ga === 'function') {
    window.ga('send', 'pageview', {
     'page': window.location.pathname + window.location.search  + window.location.hash
    });
  }

  React.renderComponent(<View />, document.getElementById('app-container'), function() {
    // l20n initialized only after everything is rendered/updated
    l20n.ready();
    setTimeout(function() {
      $('body').removeClass('fade-out');
    }, 500);
  });
};

RRouter.routing = RRouter.HashRouting.start(routes, InitializeRouter);
