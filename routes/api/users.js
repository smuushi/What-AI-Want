var express = require('express');
var router = express.Router();


router.get('/login', function(req, res, next) {
  // should log the user in by returning a JWT for the client to save
  // 
});

router.get('/register', function(req, res, next) {
  // should create a new user in our mongoDB
  //
});


module.exports = router;
