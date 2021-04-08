var express = require('express');
var router = express.Router();

const players = [
  {
    "id": "van-gerwen",
    "name": "Michael van Gerwen",
    "nickname": "De Groene Sloopkogel",
    "score": 11
  },
  {
    "id": "vd-bergh",
    "name": "Dimitri van den Bergh",
    "nickname": "Dancing Dimi",
    "score": 21
  },
  {
    "id": "clayton",
    "name": "Jonny Clayton",
    "nickname": "The Ferret",
    "score": 20
  }
  {
    "id": "aspinall",
    "name": "Nathan Aspinall",
    "nickname": "The Asp",
    "score": 18
  }
  {
    "id": "cross",
    "name": "Rob Cross",
    "nickname": "Voltage",
    "score": 15
  }
  {
    "id": "anderson",
    "name": "Gary Anderson",
    "nickname": "The Flying Scotsman",
    "score": 19
  }
  {
    "id": "wright",
    "name": "Peter Wright",
    "nickname": "Snakebite",
    "score": 16
  }
  {
    "id": "de-sousa",
    "name": "José de Sousa",
    "nickname": "The Special One",
    "score": 14
  }
  {
    "id": "wade",
    "name": "James Wade",
    "nickname": "The Machine",
    "score": 11
  }
  {
    "id": "durrant",
    "name": "Glen Durrant",
    "nickname": "Duzza",
    "score": 8
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('dartscores/index', { players });
});

module.exports = router;