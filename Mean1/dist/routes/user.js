/// <reference path="../../typings/tsd.d.ts" />
var express = require("express");
var Users_1 = require('../model/Users');
var route = express.Router();
var UserData = new Users_1.Users();
route.get("/list", function (req, res) {
    UserData.load({}, function (err, doc) {
        var data = {
            title: "Welcome to MEAN First Step | User List",
            todos: doc
        };
        res.render("user/list", data);
    });
});
module.exports = route;
