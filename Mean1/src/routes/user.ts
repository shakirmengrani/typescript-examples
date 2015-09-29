/// <reference path="../../typings/tsd.d.ts" />
import express = require("express");
import mongoose = require("mongoose");
import { Users } from '../model/Users';
var route = express.Router();
var UserData = new Users();
route.get("/list",(req:express.Request, res:express.Response):void=>{
	UserData.load({},(err:Error,doc:mongoose.Document[]):void=>{
		var data = {
			title:"Welcome to MEAN First Step | User List",
			todos:doc
		};
		res.render("user/list",data);
	});
});
export = route;