/// <reference path="../typings/tsd.d.ts" />
var express = require('express');
var path = require("path");
var users = require("./routes/users");
var app = express();
var config = {
    PORT: 3000,
    view_engine: "ejs",
    path: {
        view: '/../views',
        staticPath: '/../public'
    },
    status: {
        __404: 404
    }
};
app.set('views', path.join(__dirname, config.path.view));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, config.path.staticPath)));
app.use("/users", users);
// step 0 Hello World
app.get("/", function (req, res) {
    res.send("Hello World");
});
// step 1 render image with ejs view engine
app.get("/pic", function (req, res) {
    res.render("index/img");
});
app.use(function (req, res, next) {
    var err = new Error("Page Not Found");
    res.sendStatus(config.status.__404);
    next(err);
});
var server = app.listen(config.PORT, function () {
    console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});
