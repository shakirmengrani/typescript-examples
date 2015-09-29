/// <reference path="../typings/tsd.d.ts" />
var path = require('path');
var express = require('express');
var session = require("express-session");
var mongoose = require("mongoose");
var index = require("./routes/index");
var user = require("./routes/user");
var app = express();
app.set('views', path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.set('view engine', 'jade');
app.use(session({
    secret: "Shakir@786",
    cookie: { secure: true, httpOnly: true },
    resave: false,
    saveUninitialized: true
}));
app.use(function (req, res, next) {
    next();
});
app.use("/", index);
app.use("/users", user);
app.use(function (req, res, next) {
    var err = new Error("Page Not Found");
    res.sendStatus(404);
    next(err);
});
mongoose.connect("mongodb://127.0.0.1:27017/shakir");
var server = app;
server.listen(5000);
console.log("Server started on port " + 5000);
