/// <reference path="../../typings/express/express.d.ts" />
var express = require("express");
var router = express.Router();
router.use(function (req, res, next) {
    console.log('Request Method is ', req.method, ' from ', req.url);
    next();
});
router.get('/', function (req, res, next) {
    res.send("This is the end of request-response cycle");
});
module.exports = router;
