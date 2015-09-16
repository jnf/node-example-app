"use strict";

var sqlite3 = require('sqlite3').verbose();

function Database(path) {
  this.path = path;
}

Database.prototype = {
  test: function() { console.log('yay! it works!'); },

  query: function(statement, callback) {
    var db = new sqlite3.Database(this.path);

    db.serialize(function() {
      db.all(statement, function(err, res) {
        if (callback) { callback(res); }
      });
    });

    db.close();
  }
}


//end of file
module.exports = Database;


// other code examples
    // db.serialize(function() {
    //   var users = db.run("SELECT * FROM users;"); //executes immediately

    //   //prepares a query to be executed later.
    //   var prepared = db.prepare("INSERT INTO users VALUES (?, ?, ?);");

    //   // INSERT INTO users VALUES ('Jeremy!', 5, 'Brunch');
    //   prepared.run("Jeremy!", 5, "Brunch");
    //   prepared.run("Rosa", 4, "Breakfast");


    //   db.each("SELECT * FROM users;", function(err, row) {
    //     // row is a result from sql
    //     // { name: "Jeremy", favorite_meal: "Brunch" }
    //   })
    // })
