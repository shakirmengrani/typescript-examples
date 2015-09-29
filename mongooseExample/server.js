var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/shakir");

var UserSchema = {
	Name: String,
	Username: String,
	EMail: String,
	Pass: String
};


var UserData = mongoose.model("shakir",UserSchema,"Users");

var app = express();

app.get("/",function(req,res){
	
	UserData.find(function(err,doc){
		res.send(doc);
	});
	
});

app.listen(5000);