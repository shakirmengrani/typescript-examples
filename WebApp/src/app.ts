/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../typings/mime/mime.d.ts" />
/// <reference path="./lib/todo.ts" />

import app = require("http");
import fs = require("fs");
import appUrl = require("url");
import qs = require("querystring");
import todo = require('./lib/todo');
import mime = require("mime");

var Tlist = new todo.myTodoMod.Todo();

var config = {
	PORT: 8080,
	ContentType: {
		default: { 'Content-Type': 'application/octet-stream' },
		html: { 'Content-Type': 'text\html' },
		json: { 'Content-Type': 'application\json' }
	},
	status: {
		notFound: 404,
		ok: 200
	},
	View: {
		page: ".\\view\\page\\",
		notFound: ".\\view\\template\\404",
		header: ".\\view\\template\\header",
		footer: ".\\view\\template\\footer"
	}
};

function gethtmlresp(res: app.ServerResponse, view: string, template: Boolean = false): void {
	res.writeHead(config.status.ok, config.ContentType.html);
	res.write(fs.readFileSync(config.View.header + ".html").toString());
	res.write(fs.readFileSync(view + ".html").toString());
	res.write(fs.readFileSync(config.View.footer + ".html").toString());
}


function gethtmlwithdata(res: app.ServerResponse, view: string, template: Boolean = false): void {
	res.writeHead(config.status.ok, config.ContentType.html);
	res.write(fs.readFileSync(config.View.header + ".html").toString());
	var list = "";
	todo.myTodoMod.Todo.obj.forEach(function(element, index) {
		list += "<div class=\"row\">";
		list += "<div class=\"col-lg-10\" style=\"word-wrap: break-word;\">";
		list += element.task;
		list += "</div>";
		list += "<div class=\"col-lg-1\" style=\"font-size:36px;text-align:right\">";
		list += "<a href=\"/todo?index=" + index + "&action=remove\">&times</a>";
		list += "</div>";
		list +="</div>";
	});
	var tempData = fs.readFileSync(view + ".html").toString().replace("{{data.TodoList}}", list);
	res.write(tempData);
	res.write(fs.readFileSync(config.View.footer + ".html").toString());
}


function getapiresp() {

}

function route(req: app.ServerRequest, res: app.ServerResponse): void {
	var myUrl: appUrl.Url = appUrl.parse(req.url);
	var myMethod: string = req.method;
	var myPath: string = __dirname + myUrl.pathname;
	var isPathExist: boolean = (myUrl.pathname.substring(0,4) == "/res" ? true : false);
	if (isPathExist) {
		if (fs.lstatSync(myPath).isDirectory()) {
			gethtmlresp(res, config.View.notFound, true);
		} else {
			res.writeHead(config.status.ok, { 'Content-Type': mime.lookup(myPath) });
			res.write(fs.readFileSync(myPath));
		}
	} else {
		switch (myUrl.pathname) {
			case "/":
				gethtmlresp(res, config.View.page + "index", true);
				break;
			case "/about-us":
				gethtmlresp(res, config.View.page + "about-us", true);
				break;
			case "/services":
				gethtmlresp(res, config.View.page + "services", true);
				break;
			case "/portfolio":
				gethtmlresp(res, config.View.page + "portfolio", true);
				break;
			case "/pricing":
				gethtmlresp(res, config.View.page + "pricing", true);
				break;
			case "/contact-us":
				gethtmlresp(res, config.View.page + "contact-us", true);
				break;
			case "/todo":
				if (myUrl.query) {
					var qData = qs.parse(myUrl.query);
					switch (qData.action) {
						case "add":
							Tlist.add(new todo.myTodoMod.Todo(qData.txt_task));
							break;
						case "remove":
							Tlist.removeObj(qData.index);
							break;
						default:
							break;
					}
				}
				gethtmlwithdata(res, config.View.page + "todo", true);
				break;
			default:
				gethtmlresp(res, config.View.notFound, true);
				break;
		}
	}
	res.end();
}

var server: app.Server = app.createServer(route);
server.listen(config.PORT);
console.log("Server Start with port : " + config.PORT);