//Import (require) connection.js into orm.js
var connection = require('../config/connection.js')


var orm =
{

  //function to select all burger from database

  selectAll: function (callback) {
    connection.query('SELECT * FROM burgers', function (err, result) {
      if (err) throw err;
      callback(result);
    });
  },

  //function to insert one burger
  insertOne: function (burger_name, callback) {
    connection.query('INSERT INTO burgers SET ?',
      {
        burger_name: burger_name,
        devoured: false,
      }, function (err, result) {
        if (err) throw err;
        callback(result);
      });

  },

  //function to update burger to devoured
  updateOne: function (burgerID, callback) {
    connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: burgerID }],
      function (err, result) {
        if (err) throw err;
        callback(result);
      });
  }
};


// Export the ORM object in module.exports.
module.exports = orm;