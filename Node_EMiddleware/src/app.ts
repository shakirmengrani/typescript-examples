/// <reference path="../typings/tsd.d.ts" />

import express = require('express');
import index  = require("./routes/index");
var app: express.Express = express();
var config = {
	PORT: 3000,
	status:{
		__404:404,
		__500:500
	}
	
};

app.use((req:express.Request,res:express.Response,next)=> {
  console.log('Time:', Date.now());
  next();
});

app.use("/index",index);

app.use('/user/:id', (req:express.Request,res:express.Response,next)=> {
  console.log('Request Type:', req.method);
  next();
});

app.get('/user/:id', (req:express.Request,res:express.Response,next)=> {
  res.send('USER');
});

app.use((req:express.Request,res:express.Response,next)=>{
	
	res.sendStatus(config.status.__500).send("Somethings brokes on server");
});


var server = app.listen(config.PORT, function() {
	console.log('Example app listening at http://%s:%s', server.address().address, server.address().port);
});
