var express = require('express');
var router = express.Router();
var courses = require('../course.json');

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

module.exports = router;