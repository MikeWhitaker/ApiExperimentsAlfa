'use strict';

var faker = require('faker');
var _ = require('underscore-node');
var express = require('express');

var app = express();
var port = 9000;


app.get('/', function (req,res) {
    
    var randomNames = '';

    _(10).times(function (i) {
        randomNames = randomNames + faker.name.findName() + '<br>';
    });
    //debugger;
    res.send(randomNames);
});

app.listen(port, function(err){
    console.log('running on port ' + port);
})

// var randomName = faker.name.findName(); // Rowan Nikolaus
// var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties

// console.log('name:' + randomName);
// console.log('EMail: '  + randomEmail);
// console.log('card: ', randomCard);

