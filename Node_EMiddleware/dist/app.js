/// <reference path="../typings/tsd.d.ts" />
var express = require('express');
var index = require("./routes/index");
var app = express();
var config = {
    PORT: 3000,
    status: {
        __404: 404,
        __500: 500
    }
};
app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});
app.use("/index", index);
app.use('/user/:id', function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
});
app.get('/user/:id', function (req, res, next) {
    res.send('USER');
});
app.use(function (req, res, next) {
    res.sendStatus(500);
});
var server = app.listen(config.PORT, function () {
    console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});
