var express = require('express');
var router = express.Router();
//
const jwtAuth = require("../Middleware/JWTAuth");
const roleAuth = require("../Middleware/RoleAuth");
const Role = require("../Constants/Role");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
