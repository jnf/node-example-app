"use strict";

var Database = require('../database');

exports.indexController = {
  database_test: function(req, res) {
    var db = new Database();
    db.test();

    return res.status(200).send("plain text message");
  },

  zomg: function zomg(req, res) {
    var results = {
      zomg: "zomg it worked!",
      moar: "zomg moar"
    }

    return res.status(200).json(results);
  },

  another_endpoint: function another_endpoint(req, res) {
    return res.status(200).json({ why: "I don't know." });
  }
}
