export module myTodoMod {
	export interface ITodo {
		task: string;
	}

	export class Todo implements ITodo {

		public static obj: ITodo[] = [];

		task: string = "";

		constructor(...param) {
			if (param.length > 0) {
				this.task = param[0];
			}
		}

		public add(object: ITodo): void {
			var data: ITodo = {
				task: object.task
			}
			Todo.obj.push(data);
		}

		public getObjs(): Array<ITodo> {
			return Todo.obj;
		}

		public getObjAt(Index: number): ITodo {
			return Todo.obj[Index];
		}

		public removeObj(offset: number): void {
			Todo.obj.splice(offset, 1);
		}

		public countObj(): number {
			return Todo.obj.length;
		}
	}
}
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