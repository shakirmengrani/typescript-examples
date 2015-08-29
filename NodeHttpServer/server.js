/// <reference path="typings/node/node.d.ts" />
var http = require('http');
var fs = require("fs");
var status = 200;
var port = 8080;
var fileMap = {
    default: 'index.html',
    userList: 'users/userList.html'
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
// Response special content-typed data
function getCustomOutput(res, data) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(data);
    res.end();
}
// Set File as per URI / Route
function route(URI, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    switch (URI) {
        case "/":
            getFileForUrl(res, fileMap.default);
            break;
        case '/getUsers':
            var data = {
                users: [
                    { name: "shakir", Email: "shakir.mengrani@gmail.com" }
                ]
            };
            getCustomOutput(res, JSON.stringify(data, null, 4));
            break;
        case "/userlist":
            getFileForUrl(res, fileMap.userList);
            break;
        default:
            res.end("<h1>404 - page not found</h1>");
            break;
    }
}
// Http Server Handler
http.createServer(function (req, res) {
    route(req.url, res);
}).listen(port);
console.log("Your Server starts on localhost:" + port + "!");
