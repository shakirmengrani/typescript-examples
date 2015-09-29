/// <reference path="../../typings/tsd.d.ts" />
// require("./config");
import mongoose = require("mongoose");

export class db {
	public static connect(): void {
		var options: any = { server: { socketOptions: { keepAlive: 1 } } };
		mongoose.connect("mongodb://127.0.0.1:27017", options);
	}

	constructor() {
		db.connect();
		mongoose.connection.on('error', console.log);
		mongoose.connection.on('disconnected', db.connect);
	}
}