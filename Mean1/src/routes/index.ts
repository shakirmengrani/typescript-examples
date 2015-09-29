/// <reference path="../../typings/tsd.d.ts" />
import express = require("express");
import { Users } from "../model/Users";
var route = express.Router();
var UserData = new Users();
route.get("/", (req: express.Request, res: express.Response) => {
	UserData.load({},(err,doc):void=>{
		console.log(doc);
		res.render("index/index",{
			title:"Hello Mean",
			todos:doc
		});
	});
});

export = route;