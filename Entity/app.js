var Person = (function () {
    function Person() {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i - 0] = arguments[_i];
        }
        this.FirstName = "";
        this.LastName = "";
        this.Email = "";
        this.add = function (object) {
            var data = {
                FirstName: object.FirstName,
                LastName: object.LastName,
                Age: object.Age,
                Email: object.Email
            };
            Person.obj.push(data);
        };
        this.getObjs = function () {
            return Person.obj;
        };
        this.getObjAt = function (Index) {
            return Person.obj[Index];
        };
        this.removeObj = function (object) {
            var offset = Person.obj.indexOf(object, 0);
            Person.obj.slice(offset, 1);
        };
        this.countObj = function () {
            return Person.obj.length;
        };
        if (param.length > 0) {
            this.FirstName = param[0];
            this.LastName = param[1];
            this.Age = param[2];
            this.Email = param[3];
        }
    }
    Person.obj = [];
    return Person;
})();
var person = new Person();
person.add(new Person("Shakir", "Mengrani", 22, "user@example.com"));
person.add(new Person("Abdul", "Basit", 20, "user@example.com"));
console.log("I have " + person.countObj() + " objects");
person.getObjs().forEach(function (e) {
    console.log("First Name : " + e.FirstName + "\n Last name : " + e.LastName + "\n Email Address : " + e.Email);
});
