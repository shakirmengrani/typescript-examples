/// <reference path="../../typings/tsd.d.ts" />
// require("./config");
var mongoose = require("mongoose");
var db = (function () {
    function db() {
        db.connect();
        mongoose.connection.on('error', console.log);
        mongoose.connection.on('disconnected', db.connect);
    }
    db.connect = function () {
        var options = { server: { socketOptions: { keepAlive: 1 } } };
        mongoose.connect("mongodb://127.0.0.1:27017", options);
    };
    return db;
})();
exports.db = db;
