


var fs = require('fs');
var path = require('path');
var express = require('express');
var compression = require('compression');

var app = express();
app.use(compression());
app.use(express.static(path.join(process.cwd(), 'public')));

var restify = require('restify'),
    common = require('./common'),
    logger = require('bunyan'),
    users = require('./routes/activities'),
    __ = require('underscore');

var log = new logger({
  name: 'campsiteapi',
  streams: [
    {
      stream: process.stdout,
      level: 'debug'
    },
    {
      path: 'campsite-api.log',
      level: 'trace'
    }
  ],
  serializers: {
    req: logger.stdSerializers.req,
    // res: restify.bunyan.serializers.response,
  },
});

var server = restify.createServer({
    name : common.baseHost,
    log : log
});

//process the response formats user-agent accepts
server.use(restify.acceptParser(server.acceptable));

//If user-agent talks gzip use that 
server.use(restify.gzipResponse());

//parse request's query parameters into req.query
server.use(restify.queryParser({
    mapParams : false
}));

//parse request's body into req.body
server.use(restify.bodyParser({
    mapParams : false
}));

//parse request's authorization headers (or URI user/pass) into req.authorization
server.use(restify.authorizationParser());

//Respond to jsonp requests with Content-Type : application/javascript
server.use(restify.jsonp());

restify.CORS.ALLOW_HEADERS.push('sid');
restify.CORS.ALLOW_HEADERS.push('x-api-key');
server.use(restify.CORS());


server.pre(function (request, response, next) {
  request.log.info({req: request}, 'start');        // (1)
  return next();
});

//-------------------------  Anonymous calls here  ---------------------------------

var html = fs.readFileSync(path.join(process.cwd(), 'src', 'jsx', 'demo', 'index.html'), {
  encoding: 'utf8'
});
app.get('/', function(req, res) {
  res.send(html);
});
server.get('/activities', users.find_all);
server.get('/activities/:id', users.find_by_primary_key);

//---------------------------------------------------------------------------------------------------
// Token checker will fail any request, with 401 Unauthorized, which does not provide a valid API-Key
// Therefore all request handlers defined below this call are secured calls. 
// All handlers defined above are anonymous calls and do not require an api token.
//---------------------------------------------------------------------------------------------------

// server.use(api_token_checker);

//------------------------  Secured calls here  ----------------------------------


//----------------------  Start the server  --------------------------------------

app.listen(common.basePort, function() {

});

server.listen(common.basePort+1, function () {
    console.log('%s listening at %s', server.name, server.url);
});
