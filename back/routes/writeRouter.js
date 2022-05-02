var express = require('express');
var router = express.Router();
var db = require('../db.js');

router.get('/', function(req, res){
    //console.log('Getting all books');
    Book.findAll().then(book => {
        res.status(200).json(book);
    });
});

router.get('/:id', function(req, res){
    //console.log('Get book by id');
    Book.findById(req.params.id).then(book => {
        //console.log(book);
        res.status(200).json(book);
    });
});

module.exports = router;