/// <reference path="../typings/tsd.d.ts" />

import express = require('express');
import path = require("path");
var app: express.Express = express();
var config = {
	PORT: 3000,
	view_engine: "ejs",
	path: {
		view: '/../views',
		staticPath: '/../public'
	},
	status:{
		__404:404
	}
	
};

app.set('views', path.join(__dirname, config.path.view));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, config.path.staticPath)));



app.get("/", function(req: express.Request, res: express.Response) {
	res.send("Hello World");
});

app.get("/pic", function(req: express.Request, res: express.Response) {
	res.render("index/img");
});

app.use(function(req, res, next) {
	var err = new Error("Page Not Found");
	res.sendStatus(config.status.__404);
	next(err);
});

var server = app.listen(config.PORT, function() {
	console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});
