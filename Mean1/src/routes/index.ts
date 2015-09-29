/// <reference path="../../typings/tsd.d.ts" />
import express = require("express");
import mongoose = require("mongoose");
import { Users } from '../model/Users';
var route = express.Router();
var UserData = new Users();
route.get("/", (req: express.Request, res: express.Response): void=> {
	var data = {
		title: "Welcome to MEAN First Step"
	};
	res.render("index/index", data);
});
export = route;