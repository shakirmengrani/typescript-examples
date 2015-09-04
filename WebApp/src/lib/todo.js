var myTodoMod;
(function (myTodoMod) {
    var Todo = (function () {
        function Todo() {
            var param = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                param[_i - 0] = arguments[_i];
            }
            this.task = "";
            if (param.length > 0) {
                this.task = param[0];
            }
        }
        Todo.prototype.add = function (object) {
            var data = {
                task: object.task
            };
            Todo.obj.push(data);
        };
        Todo.prototype.getObjs = function () {
            return Todo.obj;
        };
        Todo.prototype.getObjAt = function (Index) {
            return Todo.obj[Index];
        };
        Todo.prototype.removeObj = function (offset) {
            Todo.obj.splice(offset, 1);
        };
        Todo.prototype.countObj = function () {
            return Todo.obj.length;
        };
        Todo.obj = [];
        return Todo;
    })();
    myTodoMod.Todo = Todo;
})(myTodoMod = exports.myTodoMod || (exports.myTodoMod = {}));
/*
var Todo = new Todo();

// add new Todo
Todo.add(new Todo("Shakir","Mengrani",22,"user@example.com"));
// add another Todo
Todo.add(new Todo("Abdul","Basit",20,"user@example.com"));
// print how many Todos are store in obj
console.log("I have " + Todo.countObj() + " objects");
// get all Todo in custom format
Todo.getObjs().forEach(function(e){
    console.log("First Name : " + e.task + "\n Last name : " + e.LastName + "\n Email Address : " + e.Email);
});
*/ 
