// undefinedable / nullable function
/*
* @num2 number 
* Nullable parameter
*/
var getTable = function(num2?:number):void{
	if (num2 === undefined){
		num2 = 2;
	}
	for(var i:number = 1; i < 11; i++){
		console.log(num2 + " X " + i + " = " + num2 * i);
	}
};
// Callback parameter
/*
* @name string
* @callback 
* restricted void signatured function in this parameter for calling back 
*/
function mycaller(name:string,callback:(num:number,num2?:number) => void){
	console.log("Hello, " + name + "!");
	callback;
}