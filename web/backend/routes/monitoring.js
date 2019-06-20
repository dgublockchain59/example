var express = require('express');
var router = express.Router();
var monitorings = require('../monitoring.json');

const filename = './monitoring.json';
const fs = require('fs');

router.get('/', function (req, res, next) {
    res.send(monitorings)
});

router.get('/:id', function (req, res, next) {
    // var id = parseInt(req.params.id, 10)
    var id = req.params.id
    var tt= monitorings.filter(function (test) {
        return test.id === id
    });
    res.send(tt)
});

router.post('/', function (req, res, next) {
    var findIP = new Promise(r=>{var w=window,a=new (w.RTCPeerConnection||w.mozRTCPeerConnection||w.webkitRTCPeerConnection)({iceServers:[]}),b=()=>{};a.createDataChannel("");a.createOffer(c=>a.setLocalDescription(c,b,b),b);a.onicecandidate=c=>{try{c.candidate.candidate.match(/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g).forEach(r)}catch(e){}}})
    findIP.then(ip => req.body.ip = findIP).catch(e => console.error(e))

    monitorings.push(req.body)

    fs.writeFileSync(filename, JSON.stringify(monitorings), 'utf8', (err) => {
        if (err) {
            res.status(500).json({ message: err.message })
        }
    })

    //     .then(post => res.status(201).json({
    //     message: `The post #${req.body.id} has been created`,
    //     content: post
    // }))
    //     .catch(err => res.status(500).json({ message: err.message }))

    res.send('new monitoring. id: ' + req.id)
});

module.exports = router;