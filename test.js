var mysql = require('mysql');

var connection = mysql.createConnection({
  host : "logsqa.czdgjabmvmoc.us-west-2.rds.amazonaws.com",
  user : "dbtestuser",
  password : "K88R$yQq2A2Zu#Yj",
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

