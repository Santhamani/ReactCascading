
var mysql = require('mysql');

var db = mysql.createConnection({
  // host: "63.250.42.233",
  // port:"3306",
  // user: "obscst_sysadmin",
  // password: "68N8JW!nJy(hXZax",
  // database: "obscst_blueappletechno"
  host: "localhost",
  // port:"3306"
  user: "root",
  password: "root",
  database:"local"
});

db.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE IF NOT EXISTS customers (name VARCHAR(255), address VARCHAR(255))";
  db.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});


module.exports = db;