


var fs = require('fs');
var path = require('path');
var express = require('express');
var compression = require('compression');

var app = express();
app.use(compression());
app.use(express.static(path.join(process.cwd(), 'public')));

var common = require('./common'),
    activities = require('./routes/activities'),
    __ = require('underscore');

var html = fs.readFileSync(path.join(process.cwd(), 'src', 'jsx', 'demo', 'index.html'), {
  encoding: 'utf8'
});
app.get('/', function(req, res) {
  res.send(html);
});
app.get('/activities', activities.find_all);
app.get('/activities/:id', activities.find_by_primary_key);

//----------------------  Start the server  --------------------------------------

app.listen(common.basePort, function() {
  console.log('Listening on http://0.0.0.0:3000');
});

process.on('uncaughtException', function() {
  process.exit(0);
});
