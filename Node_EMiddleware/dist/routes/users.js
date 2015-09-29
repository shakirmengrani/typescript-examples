/// <reference path="../../typings/tsd.d.ts" />
var express = require("express");
var router = express.Router();
router.get("/", function (req, res) {
    var jObj = { name: "Shakir", email: "shakir.mengrani@gmail.com" };
    res.send(JSON.stringify(jObj));
});
module.exports = router;
