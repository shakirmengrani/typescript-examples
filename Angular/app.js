if (typeof __decorate !== "function") __decorate = function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
/// <reference path="typings/angular2/angular2.d.ts" />
var angular2_1 = require('angular2/angular2');
var dataFactory = (function () {
    function dataFactory() {
        this.rows = [];
        this.rows.push({ name: "shakir", email: "shakir@example.com" });
    }
    return dataFactory;
})();
var myComp = (function () {
    function myComp(dataFactory) {
        this.name = "";
        this.name = "shakir";
        this.rows = dataFactory.rows;
    }
    myComp = __decorate([
        angular2_1.Component({
            selector: "myapp",
            appInjector: [dataFactory]
        }),
        angular2_1.View({
            template: "\n    <h1>Sup {{ name }}</h1>\n    <div *ng-for=\"#row of rows; #i = index\">{{ row.name }}</div>\n  ",
            directives: [
                angular2_1.NgFor
            ]
        })
    ], myComp);
    return myComp;
})();
angular2_1.bootstrap(myComp);
