/// <reference path="../../typings/tsd.d.ts" />
var express = require("express");
var Users_1 = require('../model/Users');
var route = express.Router();
var UserData = new Users_1.Users();
route.get("/", function (req, res) {
    var data = {
        title: "Welcome to MEAN First Step"
    };
    res.render("index/index", data);
});
module.exports = route;
