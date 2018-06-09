"use strict";

var faker = require("faker");
var _ = require("underscore-node");
var express = require("express");

var app = express();
var port = 9000;

var namesRouter = express.Router();

namesRouter.route("/")
  .get(function(request, result) {
    var listOfNames = generateListOfNames();
    //var listOfNames = formatHtmlListOfNames(listOfNames);  //this should be json
    //listOfNames = JSON.stringify(listOfNames);
    result.send(listOfNames);
});

app.use(express.static("public"));
app.use("/Names", namesRouter);

app.listen(port, function(err) {
  console.log("running on port " + port);
});

function generateListOfNames(params) {
  var listOfNames = [];
  _(10).times(function(i) {
    listOfNames.push(faker.helpers.userCard());
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