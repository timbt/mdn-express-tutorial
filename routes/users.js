var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('index of users');
});

router.get('/:userId/', function(req ,res, next){
  res.send('User ID: ' + req.params.userId);
});

module.exports = router;
