/// <reference path="typings/node/node.d.ts" />
var http = require('http');
var fs = require("fs");
var status = 200;
var port = 8080;
var fileMap = {
    default: 'index.html'
};
// Response data from mapped file
function getFileForUrl(res, resFile) {
    fs.readFile(resFile, function (err, data) {
        if (err) {
            return console.log(err);
        }
        res.write(data);
        res.end();
    });
}
// Set File as per URI / Route
function route(URI, res) {
    switch (URI) {
        case "/":
            getFileForUrl(res, fileMap.default);
            break;
        default:
            res.end("<h1>404 - page not found</h1>");
            break;
    }
}
// Http Server Handler
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    route(req.url, res);
}).listen(port);
console.log("Your Server starts on localhost:" + port + "!");
