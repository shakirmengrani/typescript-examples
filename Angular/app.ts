/// <reference path="typings/angular2/angular2.d.ts" />
import {
	Component,
	View,
	NgFor,
	bootstrap
	} from 'angular2/angular2';

type row = {name:string,email:string};

class dataFactory{
	rows:Array<row> = [];
	constructor(){
		this.rows.push({name:"Shakir Mengrani",email:"shakir@example.com"});
		this.rows.push({name:"Abdul Basit",email:"basit@example.com"});
		this.rows.push({name:"Bilal",email:"bilal@example.com"});
	}
	
}

@Component({
	selector:"myapp",
	appInjector :[dataFactory]
})

@View({
	 templateUrl:'list.html',
  directives:[
		NgFor
	]
})

class myComp{
	name:string = "";
	rows:Array<row>;
	constructor(dataFactory:dataFactory){
		this.name = "shakir";
		console.log(dataFactory.rows);	
		this.rows = dataFactory.rows;
	}
	
}



bootstrap(myComp);