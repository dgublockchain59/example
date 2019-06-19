var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var mysql = require('mysql')

//mysql 커넥션 생성
var client = mysql.createConnection({
    host : "127.0.0.1", //서버 로컬 IP
    port : 3306,
    user : "root", //계정 아이디
    password : "1234", //계정 비밀번호
    database : "ogu" //접속할 DB
})

router.get('/', function(req, res, next) {
  client.query("SELECT * FROM user;", function(err, result, fields){
    if(err){
      console.log("쿼리문에 오류가 있습니다.");
    }
    else{
      res.json(result);
    }
  });

});

router.get('/signUp', function(req, res, next) {
  res.render('signUp');
});


router.post('/signUp', function(req, res, next) {
  var body = req.body;
  
  client.query("INSERT INTO user (id, passwd) VALUES (?,?)", [
      body.id, body.passwd
    ], function(){
    res.redirect("/signUp");
  });
});

module.exports = router;
