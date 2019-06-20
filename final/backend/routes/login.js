var bodyParser=require('body-parser');
var express = require('express');
var router = express.Router();


//mysql 모듈 불러오기
var mysql = require('mysql')

//mysql 커넥션 생성
var connection = mysql.createConnection({
    host : "127.0.0.1", //서버 로컬 IP
    port : 3306,
    user : "root", //계정 아이디
    password : "1234", //계정 비밀번호
    database : "ogu" //접속할 DB
})

//mysql 접속
connection.connect()

//body parser 사용
router.use(bodyParser.urlencoded({extended:true}))

//insert user
router.post('/', function (req, res, next) {
    var id = req.body.id
    var passwd = req.body.passwd

    if(id && passwd) { // userID와 userPW가 유효하다면

        //SQL문 실행
        connection.query("INSERT INTO user (id, passwd) VALUES ('"+ id +"', '"+passwd+"')" , 
            function (error, result, fields) {

            if (error) { //에러 발생시
                res.send('err : ' + error)
                console.log(error)
            }
            else { //실행 성공
                console.log( id + ',' + passwd )
                res.send('success create id: '+ id +' example: ' +passwd)
            }
        })


    }

})

module.exports = router;
