if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
if (typeof __metadata !== "function") __metadata = function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var dataFactory = (function () {
    function dataFactory() {
        this.rows = [];
        this.rows.push({ name: "Shakir Mengrani", email: "shakir@example.com" });
        this.rows.push({ name: "Abdul Basit", email: "basit@example.com" });
        this.rows.push({ name: "Bilal", email: "bilal@example.com" });
    }
    return dataFactory;
})();
var myComp = (function () {
    function myComp(dataFactory) {
        this.name = "";
        this.name = "shakir";
        console.log(dataFactory.rows);
        this.rows = dataFactory.rows;
    }
    myComp = __decorate([
        angular2_1.Component({
            selector: "myapp",
            appInjector: [dataFactory]
        }),
        angular2_1.View({
            templateUrl: 'list.html',
            directives: [
                angular2_1.NgFor
            ]
        }), 
        __metadata('design:paramtypes', [dataFactory])
    ], myComp);
    return myComp;
})();
angular2_1.bootstrap(myComp);
