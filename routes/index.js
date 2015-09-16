var express = require('express');
var router = express.Router();
var index_exports = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  return index_exports.indexController.zomg(req, res);
});

router.get('/another_endpoint', function(req, res, next) {
  return index_exports.indexController.another_endpoint(req, res);
});

router.get('/database_test', function(req, res, next) {
  return index_exports.indexController.database_test(req, res);
});

module.exports = router;
