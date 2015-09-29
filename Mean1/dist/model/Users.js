/// <reference path="../../typings/tsd.d.ts" />
var mongoose = require("mongoose");
var Users = (function () {
    function Users() {
        this.schema = new mongoose.Schema({
            Name: { type: String, default: '' },
            Username: { type: String, default: '' },
            EMail: { type: String, default: '' },
            Pass: { type: String, default: '' }
        });
        if (!Users.UserData) {
            Users.UserData = mongoose.model("shakir", this.schema, "Users");
        }
    }
    Users.prototype.load = function (cond, callback) {
        Users.UserData.find(cond, callback);
    };
    return Users;
})();
exports.Users = Users;
