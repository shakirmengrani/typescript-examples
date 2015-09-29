/// <reference path="../typings/tsd.d.ts" />
var path = require('path');
var express = require('express');
var session = require("express-session");
var db_1 = require('./library/db');
var index = require("./routes/index");
var app = express();
db_1.db.connect();
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
app.use(function (req, res, next) {
    var err = new Error("Page Not Found");
    res.sendStatus(404);
    next(err);
});
var server = app;
server.listen(5000);
console.log("Server started on port " + 5000);
