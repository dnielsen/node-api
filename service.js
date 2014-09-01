var fs = require('fs');
var path = require('path');
var express = require('express');
var parse = require('ua-parser').parse;
var compression = require('compression');
var minify = require('html-minifier').minify;

var app = express();
app.use(compression());
app.use(express.static(path.join(process.cwd(), 'public')));

var defaultAppName = process.env.APP ? process.env.APP : 'app';
var html = fs.readFileSync(path.join(process.cwd(), 'src', 'jsx', defaultAppName, 'index.html'), {
  encoding: 'utf8'
});

/*
 * Uncomment following if you would like to use HTML5 history API
 * when supported and fallback to Hash based navigation (IE9)
 */
// app.all('*', function(req, res, next) {
//   var r = parse(req.headers['user-agent']);
//   if(r.ua.family === 'IE' && r.ua.major === '9') {
//     if(req.accepts('text/html')) {
//       if(req.path !== '/') {
//         res.redirect('/#'+req.path);
//         return;
//       }
//       res.send(html);
//     } else next();  
//     return;
//   }
//   if(req.accepts('text/html'))
//     res.send(html);
//   else next();
// });

/**
 * IMPORTANT: comment the following if you uncomment above block
 */
var createStyleTag = function(file, media) {
  media = media || 'screen';
  return "    <link media='"+media+"' rel='stylesheet' type='text/css' href='"+file+"'>\n";
};

var stylesheets = '';
if(process.env.NODE_ENV === 'development') {
  stylesheets += createStyleTag('/css/'+defaultAppName+'/raw/{dir}/main.css', 'screen,print');
  stylesheets += createStyleTag('/css/'+defaultAppName+'/raw/{dir}/theme.css');
  stylesheets += createStyleTag('/css/'+defaultAppName+'/raw/{dir}/colors.css');
  stylesheets += createStyleTag('/css/'+defaultAppName+'/raw/{dir}/font-faces.css');
} else {
  stylesheets += createStyleTag('/css/'+defaultAppName+'/blessed/{dir}/main-blessed1.css', 'screen,print');
  stylesheets += createStyleTag('/css/'+defaultAppName+'/blessed/{dir}/main.css', 'screen,print');
  stylesheets += createStyleTag('/css/'+defaultAppName+'/blessed/{dir}/theme.css');
  stylesheets += createStyleTag('/css/'+defaultAppName+'/blessed/{dir}/colors-blessed1.css');
  stylesheets += createStyleTag('/css/'+defaultAppName+'/blessed/{dir}/colors.css');
  stylesheets += createStyleTag('/css/'+defaultAppName+'/blessed/{dir}/font-faces.css');
}

html = minify(html.replace('{stylesheets}', stylesheets), {
  collapseWhitespace: true
});

var ltr = html.replace(new RegExp('{dir}', 'g'), 'ltr');
var rtl = html.replace(new RegExp('{dir}', 'g'), 'rtl');

app.get('/ltr/', function(req, res) {
  res.send(ltr);
});

app.get('/rtl/', function(req, res) {
  if(process.env.RTL === 'false')
    return res.redirect('/ltr/');
  res.send(rtl);
});

/** BEGIN X-EDITABLE ROUTES */

app.get('/xeditable/groups', function(req, res) {
  res.send([ 
    {value: 0, text: 'Guest'},
    {value: 1, text: 'Service'},
    {value: 2, text: 'Customer'},
    {value: 3, text: 'Operator'},
    {value: 4, text: 'Support'},
    {value: 5, text: 'Admin'}
  ]);
});

app.get('/xeditable/status', function(req, res) {
  res.send(500);
});

app.post('/xeditable/address', function(req, res) {
  res.send(200);
});

app.post('/dropzone/file-upload', function(req, res) {
  res.send(200);
});

/** END X-EDITABLE ROUTES */

var server = app.listen(process.env.PORT, function() {
  console.log('Server started on port %d', server.address().port);
});


process.on('uncaughtException', function() {
  process.exit(0);
});
