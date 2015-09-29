/// <reference path="../../typings/tsd.d.ts" />
var express = require("express");
var Users_1 = require("../model/Users");
var route = express.Router();
var UserData = new Users_1.Users();
route.get("/", function (req, res) {
    UserData.load({}, function (err, doc) {
        console.log(doc);
        res.render("index/index", {
            title: "Hello Mean",
            todos: doc
        });
    });
});
module.exports = route;
