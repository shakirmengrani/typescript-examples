/// <reference path="../../typings/tsd.d.ts" />
import mongoose = require("mongoose");
export class Users {
	private UserData: mongoose.Model<mongoose.Document>;
	private schema: mongoose.Schema = new mongoose.Schema({
		Name: { type: String, default: '' },
		Username: { type: String, default: '' },
		EMail: { type: String, default: '' },
		Pass: { type: String, default: '' }
	});
	constructor() {
		this.UserData = mongoose.model("shakir", this.schema, "Users");
		console.log("Registered");
	}

	public load(cond,callback?:(err:Error,doc:mongoose.Document[])=>void):void {
		this.UserData.find(cond,callback);
	}
}