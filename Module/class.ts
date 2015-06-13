/// <reference path="interface.ts" />
module myApp{

	export class calc implements Icalc{
		num1:number = 0;
		num2:number = 0;
		private result:number = 0;
			
		public add():void{
			this.result = (this.num1 + this.num2);
			console.log(this.result);
		}
		
		public sub():void{
			this.result = (this.num1 - this.num2);
			console.log(this.result);
		}
		
		public mul():void{
			this.result = (this.num1 * this.num2);
			console.log(this.result);
		}
		
		public div():void{
			this.result = (this.num1 / this.num2);
			console.log(this.result);
		}
	}
}
