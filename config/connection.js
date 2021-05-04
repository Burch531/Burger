var mysql = require("mysql");
var connection;


var connection;

if (process.env.JAWSDB_URL)
{
	connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else
{
	connection = mysql.createConnection(
	{
		host: 'localhost',
		user: 'root',
		password: 'JRobert202',
		database: 'burger_db'
	});
};

// Make connection.
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
connection.connect()

// Export connection for our ORM to use.
module.exports = connection;
