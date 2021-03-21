// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(column, value, cb) {
    orm.insertOne("burgers", column, value, function(res) {
      cb(res);
    });
  },
  updateOne: function(id, cb) {
    orm.update("burgers", "devoured", true, id, function(res) {
      cb(res);
    });
  }
};
  


// Export the database functions for the controller (catsController.js).
module.exports = burgers;