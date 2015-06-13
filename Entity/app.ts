// Interface  = desgined fields 
interface IPerson{
	/*
	* @FirstName
	* Store Person's firstname
	*/
	FirstName:string;
	/*
	* @LastName
	* Store Person's lastname
	*/
	LastName:string;
	/*
	* @Age
	* Store Person's age
	*/
	Age:number;
	/*
	* @Email
	* Store Person's email address
	*/
	Email:string;
}
// Person = Store Person information as a entity
class Person implements IPerson{
	/*
	* @obj
	* hold person's information 
	*/
	public static obj:IPerson[] = [];
	// region Properties
	FirstName:string = "";
	LastName:string = "";
	Age:number;
	Email:string = "";
	// endregion
	
	// set properties
	constructor(...param){
		if (param.length > 0){
			this.FirstName = param[0];
			this.LastName = param[1];
			this.Age = param[2];
			this.Email = param[3];
		}
	}
	
	// Add data into obj named memory
	public add(object:IPerson):void{
		var data:IPerson = {
			FirstName:object.FirstName,
			LastName:object.LastName,
			Age:object.Age,
			Email:object.Email
		}
		Person.obj.push(data);	
	} 
	// get all persons from obj
	public getObjs():Array<IPerson>{
		return Person.obj;
	}
	// get specfic person from obj
	public getObjAt(Index:number):IPerson{
		return Person.obj[Index];
	}
	// remove specfic person from obj
	public removeObj(object:IPerson):void{
		var offset = Person.obj.indexOf(object,0);
		Person.obj.slice(offset,1);
	}
	// get total number of persons from obj
	public countObj():number{
		return Person.obj.length;
	}
}

// create new instance of person object
var person = new Person();

// add new person
person.add(new Person("Shakir","Mengrani",22,"user@example.com"));
// add another person
person.add(new Person("Abdul","Basit",20,"user@example.com"));
// print how many persons are store in obj
console.log("I have " + person.countObj() + " objects");
// get all person in custom format
person.getObjs().forEach(function(e){
	console.log("First Name : " + e.FirstName + "\n Last name : " + e.LastName + "\n Email Address : " + e.Email);
});