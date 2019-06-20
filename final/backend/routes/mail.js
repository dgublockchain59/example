var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer');//jihye add
var smtpPool = require('nodemailer-smtp-pool');
/*main test*/
//smtpPool는 smtp서버를 사용하기 위한 모듈로
//transporter객체를 만드는 nodemailer의 createTransport메소드의 인자로 사용된다.

router.post('/', function (req, res, next) {

const config = {
  mailer: {
    service: 'Gmail',
    host: 'localhost',
    port: '465',
    user: 'tlsjh082@gmail.com',
    password: 'jkzbmsjacalbjqth',
  },
};
var ip=req.body.ip;
const from = 'tlsjh082@gmail.com';
const to = 'tlsjh082@gmail.com';
const subject = 'Warning !';
const html = ip+" has accessed your student information.";
// const text = 'This is just text.';

const mailOptions = {
  from,
  to,
  subject,
  html,
  // text,
};
// 본문에 html이나 text를 사용할 수 있다.

const transporter = nodemailer.createTransport(smtpPool({
  service: config.mailer.service,
  host: config.mailer.host,
  port: config.mailer.port,
  auth: {
    user: config.mailer.user,
    pass: config.mailer.password,
  },
  tls: {
    rejectUnauthorize: false,
  },
  maxConnections: 5,
  maxMessages: 10,
}));

// 메일을 전송하는 부분
transporter.sendMail(mailOptions, (err, res) => {
  if (err) {
    console.log('failed... => ', err);
  } else {
    console.log('succeed... => ', res);
  }

  transporter.close();
});
});

module.exports = router;
