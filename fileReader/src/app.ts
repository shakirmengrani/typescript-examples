/// <reference path="../typings/node/node.d.ts" />

import fs = require('fs');

fs.readFile("r.json",{encoding: 'utf-8'},function(err,data){
	if (err) throw err;
	var d = JSON.parse(data);
	console.log(d.name);
});
