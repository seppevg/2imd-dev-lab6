var express = require('express');
var router = express.Router();
const players = require("../data/players").players;

router.get('/', (req, res, next) => {
    res.render('dartscores/updatestats', { players });
});

module.exports = router;