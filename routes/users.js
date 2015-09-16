var express  = require('express');
var router   = express.Router();
var Database = require('../db.js')

// /users/
router.get('/', function(req, res, next) {
  res.send('respond with a resource!');
});

// /users/new
router.get('/test', function(req, res, next) {
  var db = new Database('test.db');
  console.log(db.wat);
  db.wat()
  return res.status(200).json(db);
});

// /users/:id
router.get('/:id', function(req, res, next) {
  return res.status(200).json({ you_said: req.params });
});

module.exports = router;
