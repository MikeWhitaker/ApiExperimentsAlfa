"use strict";

var faker = require("faker");
var _ = require("underscore-node");
var express = require("express");

var app = express();
var port = 9000;

app.get("/", function(req, res) {
  var randomNames = "";

  var listOfNames = generateListOfNames();
  var htmlOutPutList = formatHtmlListOfNames(listOfNames);
//   debugger;

  res.send(htmlOutPutList);
});

app.listen(port, function(err) {
  console.log("running on port " + port);
});

function generateListOfNames(params) {
  var listOfNames = [];
  _(10).times(function(i) {
    listOfNames.push(faker.name.findName());
  });
  return listOfNames;
}

function formatHtmlListOfNames(listOfNames) {
  // Return a html string fo the sorted list
  var sortedList = _(listOfNames).sortBy();
  var htmlOutPutList = "";
  //iterate of the list and add the item to the list
  _(sortedList).each(function(item) {
    htmlOutPutList = htmlOutPutList + item + "<br>";
  });

  return htmlOutPutList;
}

// var randomName = faker.name.findName(); // Rowan
// var randomEmail = faker.internet.email(); // Haley@erich.biz
// var randomCard = faker.helpers.createCard(); // random contact card containing many properties

// console.log('name:' + randomName);
// console.log('EMail: '  + randomEmail);
// console.log('card: ', randomCard);
