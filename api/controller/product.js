 var express = require('express');
 var db = require('../config/config.js');
module.exports=  {
 getProducts : async  function (req, res, next) {
 try {
    const users = await db.any('SELECT * FROM "products LIMIT 3 OFFSET 2"', [true]);
    // success
    res.status(200)
        .json({
          status: 'success',
          data: users,
          message: 'Get du luu thanh cong'
        });
} 
catch(e) {
    // error
      res.status(201)
        .json({
          status: 'fail',
          data: e,
          message: 'Retrieved ALL puppies'
        });
}
     
}
}