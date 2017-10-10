 var express = require('express');
 var router = express.Router();
 var UserController = require('../controller/product');
 router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get('/getProducts',UserController.getProducts);
module.exports = router;