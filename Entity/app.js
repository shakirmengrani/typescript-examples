// Person = Store Person information as a entity
var Person = (function () {
    // endregion
    // set properties
    function Person() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i - 0] = arguments[_i];
        }
        // region Properties
        this.FirstName = "";
        this.LastName = "";
        this.Email = "";
        if (param.length > 0) {
            this.FirstName = param[0];
            this.LastName = param[1];
            this.Age = param[2];
            this.Email = param[3];
        }
    }
    // Add data into obj named memory
    Person.prototype.add = function (object) {
        var data = {
            FirstName: object.FirstName,
            LastName: object.LastName,
            Age: object.Age,
            Email: object.Email
        };
        Person.obj.push(data);
    };
    // get all persons from obj
    Person.prototype.getObjs = function () {
        return Person.obj;
    };
    // get specfic person from obj
    Person.prototype.getObjAt = function (Index) {
        return Person.obj[Index];
    };
    // remove specfic person from obj
    Person.prototype.removeObj = function (object) {
        var offset = Person.obj.indexOf(object, 0);
        Person.obj.slice(offset, 1);
    };
    // get total number of persons from obj
    Person.prototype.countObj = function () {
        return Person.obj.length;
    };
    /*
    * @obj
    * hold person's information
    */
    Person.obj = [];
    return Person;
})();
// create new instance of person object
var person = new Person();
// add new person
person.add(new Person("Shakir", "Mengrani", 22, "user@example.com"));
// add another person
person.add(new Person("Abdul", "Basit", 20, "user@example.com"));
// print how many persons are store in obj
console.log("I have " + person.countObj() + " objects");
// get all person in custom format
person.getObjs().forEach(function (e) {
    console.log("First Name : " + e.FirstName + "\n Last name : " + e.LastName + "\n Email Address : " + e.Email);
});
