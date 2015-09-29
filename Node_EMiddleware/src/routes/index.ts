/// <reference path="../../typings/express/express.d.ts" />
import express = require("express");
var router = express.Router();

router.use((req:express.Request,res:express.Response,next)=>{
	console.log('Request Method is ', req.method, ' from ', req.url);
	next();
});

router.get('/',(req:express.Request,res:express.Response,next)=>{
	res.send("This is the end of request-response cycle");
});
export = router;