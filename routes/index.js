var express = require('express');
var router = express.Router();
const players = require("../data/players").players;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('dartscores/index', { players });
});

module.exports = router;