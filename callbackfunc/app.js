// undefinedable / nullable function
/*
* @num2 number
* Nullable parameter
*/
var getTable = function (num2) {
    if (num2 === undefined) {
        num2 = 2;
    }
    for (var i = 1; i < 11; i++) {
        console.log(num2 + " X " + i + " = " + num2 * i);
    }
};
// Callback parameter
/*
* @name string
* @callback
* restricted void signatured function in this parameter for calling back
*/
function mycaller(name, callback) {
    console.log("Hello, " + name + "!");
    callback;
}
