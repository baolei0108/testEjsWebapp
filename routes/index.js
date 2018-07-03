var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  // res.render('index', { title: '<h1>Express</h1>'
  //                         ,users:[{username: 'Wilson'},
  //                               {username: 'Wilson Zhong'},
  //                               {username: 'Zhong Wei'}] 
  // });

  res.render('index');

});



router.get('/form', function(req, res) {
  res.render('form', {msg: 'form8888'});

});


router.get('/login', function(req, res) {
  res.render('login', {msg: 'form8888'});

});


router.get('/reg', function(req, res) {
  res.render('reg', {msg: 'form8888'});

});


//
router.post('/login', function (req, res) {
});



module.exports = router;




