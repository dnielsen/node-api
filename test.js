var mysql = require('mysql');

var connection_config = require('./config_data.json').db_config.connection;

var connection = mysql.createConnection(connection_config);

connection.connect();

var workflow = ['Load Builder', 'Customer Load Parser', 'Invoice Importer']
var process = ['Get Original File', 'Save Original File to Archive', 'Split Original File', 'Save Load Chunk', 'Map Text to XML', 'Save Load XML', 'Build Load (REST)', 'Save Original Invoice', 'Format as EDI 210 v4010', 'Put Invoice on MG FTP'];
var object = ['Load', 'Invoice'];
var severity = ['OK', 'FAIL'];

var getDate = function(i) {
  var date = new Date(Date.now() + (1000*60*i));
  return date.toISOString().replace('T', ' ').replace(/(\.).*/, '');
};

var getWorkflow = function() {
  return workflow[Math.floor(Math.random() * (workflow.length))];
};

var getProcess = function() {
  var v = process.shift();
  process.push(v);
  return v;
};

var getObject = function() {
  return object[Math.floor(Math.random() * (object.length))];
};

var getSeverity = function() {
  return severity[Math.floor(Math.random() * (severity.length))];
};

var total = 500, i=0;
function fillTable() {
  if(i >= total) return;
  ++i;
  connection.query("INSERT INTO `event_log` (`event_log_id`, `timestamp`, `workflow`, `process`, `object`, `object_id`, `severity`) VALUES ('"+i+"', '"+getDate(i)+"', '"+getWorkflow()+"', '"+getProcess()+"', '"+getObject()+"', '"+i+"', '"+getSeverity()+"');", function(err, rows, fields) {
    console.log(i);
    fillTable();
  });  
}

fillTable();
