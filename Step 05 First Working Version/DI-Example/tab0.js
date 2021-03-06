var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", 'angular2/angular2'], function (require, exports, angular2_1) {
    var Tab = (function () {
        function Tab() {
            console.log("new tab");
        }
        Tab.prototype.addPane = function (pane) { };
        Tab = __decorate([
            angular2_1.Component({ selector: 'tab' }),
            angular2_1.View({ templateUrl: 'tab.html' }), 
            __metadata('design:paramtypes', [])
        ], Tab);
        return Tab;
    })();
    var Pane = (function () {
        function Pane(tab) {
            console.log("new pane" + this.title);
            console.log("Mit Tab" + tab);
        }
        Pane = __decorate([
            angular2_1.Component({ selector: 'pane' }),
            angular2_1.View({ templateUrl: 'pane.html' }), 
            __metadata('design:paramtypes', [Tab])
        ], Pane);
        return Pane;
    })();
    var TabApplicationComponent = (function () {
        function TabApplicationComponent() {
        }
        TabApplicationComponent = __decorate([
            angular2_1.Component({
                selector: 'tabapplication'
            }),
            angular2_1.View({
                templateUrl: 'tabapplication.html',
                directives: [Tab, Pane]
            }), 
            __metadata('design:paramtypes', [])
        ], TabApplicationComponent);
        return TabApplicationComponent;
    })();
    console.log("Vor Bootsstrap");
    angular2_1.bootstrap(TabApplicationComponent);
    console.log("nachBS");
});
//# sourceMappingURL=tab0.js.map