var mysql = require('mysql');

var connection = mysql.createConnection({
  host : "HOST",
  user : "USER",
  password : "PASSWORD",
  database : "logsqa",
  charset : "UTF8MB4_GENERAL_CI"
});

connection.connect();

connection.query('select column_name, data_type from information_schema.columns where table_name="activity_log"', function(err, rows, fields) {
  console.log(rows);
});
connection.query('select * from business_object', function(err, rows, fields) {
  console.log(rows);
});

