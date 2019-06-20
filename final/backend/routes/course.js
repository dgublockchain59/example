var express = require('express');
var router = express.Router();
var courses = require('../course.json');

const filename = './course.json';
const fs = require('fs');

router.get('/', function (req, res, next) {
    res.send(courses)
});

router.get('/:id', function (req, res, next) {
    var id = req.params.id
    var tt= courses.filter(function (test) {
        return test.id === id
    });
    res.send(tt)
});

router.post('/', function (req, res, next) {
    // var findIP = new Promise(r=>{var w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)}catch(e){}}})
    // findIP.then(ip => req.body.ip = findIP).catch(e => console.error(e))

    courses.push(req.body)

    fs.writeFileSync(filename, JSON.stringify(courses), 'utf8', (err) => {
        if (err) {
            res.status(500).json({ message: err.message })
        }
    })
    res.send('new courses. id: ' + req.id)
});

module.exports = router;