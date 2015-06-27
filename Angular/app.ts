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
		this.rows.push({name:"shakir",email:"shakir@example.com"});
	}
}

@Component({
	selector:"myapp",
	appInjector :[dataFactory]
})

@View({
	 template: `
    <h1>Sup {{ name }}</h1>
    <div *ng-for="#row of rows; #i = index">{{ row.name }}</div>
  `,
  directives:[
		NgFor
	]
})

class myComp{
	name:string = "";
	rows:Array<row>;
	constructor(dataFactory:dataFactory){
		this.name = "shakir";	
		this.rows = dataFactory.rows;
	}
	
}



bootstrap(myComp);