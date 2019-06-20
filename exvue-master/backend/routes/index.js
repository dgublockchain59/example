var express = require('express');
var path = require('path');
var router = express.Router();
var session = require('express-session');

var mysql = require('mysql')

//mysql 커넥션 생성
var client = mysql.createConnection({
  host: "127.0.0.1", //서버 로컬 IP
  port: 3306,
  user: "root", //계정 아이디
  password: "1234", //계정 비밀번호
  database: "ogu" //접속할 DB
})

client.connect();

/* GET home page. */
router.get('/', function (req, res, next) {
  session=req.session;
  console.log(req.session)
 
  res.render('index', { title:"express"});
});

router.get('/showUser', function (req, res, next) {
  client.query("SELECT * FROM user;", function (err, result, fields) {
    if (err) {
      console.log("쿼리문에 오류가 있습니다.");
    }
    else {
      res.render('showUser', {
        results: result
      });
    }
  });
});

router.get('/login', function (req, res, next) {
  var session = req.session;

  res.render('login', {
    session: session
  });
});

router.post("/login", function (req, res, next) {
  var body = req.body;

  client.query('select * from user where id=\'' + body.id + '\' and passwd=\'' + body.passwd + '\'', function (err, result, fields) {
    if (!err) {
      if (result[0] != undefined) {
        console.log("비밀번호 일치");
        req.session = body.id;
        console.log(req.session)
        req.session.save(function () {
          res.redirect('/');
        });
      }
      else {
        console.log("비밀번호 불일치");
        res.redirect("/login");
      }
    } else {
      res.send('error : ' + err);
    }
  });
});

// router.get('/', function(req, res, next) {

//   res.send("환영합니다 ~");
// });

router.get('/signUp', function (req, res, next) {
  res.render('signUp');
});

router.post('/signUp', function (req, res, next) {
  var body = req.body;

  // var inputPassword = body.passwd;
  // var salt = Math.round((new Date().valueOf() * Math.random())) + "";
  // var hashPassword = crypto.createHash("sha512").update(inputPassword + salt).digest("hex");

  client.query("INSERT INTO user (id, passwd) VALUES (?,?)", [
    body.id, body.passwd
  ], function () {
    res.redirect("/signUp");
  });
});

module.exports = router;
