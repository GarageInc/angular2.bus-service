System.register(['angular2/core', 'angular2/router'], function(exports_1) {
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
    var core_1, router_1;
    var EditBusComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            EditBusComponent = (function () {
                function EditBusComponent(_router) {
                    this._router = _router;
                }
                EditBusComponent.prototype.ngOnInit = function () {
                };
                EditBusComponent = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.None,
                        selector: 'bus-edit',
                        templateUrl: 'app/views/carpark/bus-edit.component.html',
                        styleUrls: ['app/assets/css/bus-edit.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], EditBusComponent);
                return EditBusComponent;
            })();
            exports_1("EditBusComponent", EditBusComponent);
        }
    }
});
//# sourceMappingURL=bus-edit.component.js.map