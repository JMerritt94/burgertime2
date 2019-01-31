const connection = require("./connection");

const orm = {
  getBurgers: function(cb) {
    connection.query("SELECT * FROM burgers;", function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  eat: function(state, cb) {
    connection.query(
      "UPDATE burgers SET devoured=true WHERE id=" + state + ";",
      cb
    );
  },

  reviveBurger: function(cb) {
    connection.query("UPDATE burgers SET devoured = FALSE", cb);
  },

  create: function(val, cb) {
    connection.query(
      "INSERT INTO burgers (`burger_name`,`devoured`) VALUES ('" + val + "',FALSE);",
      cb
    );
  }                       
};

module.exports = orm;
// in es6 this would be
