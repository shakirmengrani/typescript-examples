/// <reference path="../typings/tsd.d.ts" />
import path = require('path');
import express = require('express');
import { db } from "./library/db";
import index = require("./routes/index");
import user = require("./routes/user");
var app = express();
app.set('views', path.join(__dirname, "/views"));
app.use(express.static(path.join(__dirname, "/public")));
app.set('view engine', 'jade');

app.use((req, res, next) => {
	next();
});

app.use("/", index);
app.use("/users", user);

app.use((req, res, next) => {
	var err = new Error("Page Not Found");
	res.sendStatus(404);
	next(err);
});
db.connect();
var server: express.Application = app;
server.listen(5000);
console.log("Server started on port " + 5000);