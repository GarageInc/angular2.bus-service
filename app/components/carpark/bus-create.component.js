System.register(['angular2/core', 'angular2/router', "../../models/bus"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, bus_1, core_2;
    var CreateBusComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (bus_1_1) {
                bus_1 = bus_1_1;
            }],
        execute: function() {
            CreateBusComponent = (function () {
                function CreateBusComponent(_router) {
                    this._router = _router;
                    this.bus = new bus_1.Bus();
                }
                CreateBusComponent.prototype.ngOnInit = function () {
                };
                CreateBusComponent = __decorate([
                    core_1.Component({
                        encapsulation: core_2.ViewEncapsulation.None,
                        selector: 'create-bus',
                        templateUrl: 'app/views/carpark/bus-edit.component.html',
                        styleUrls: ['app/assets/css/car-park.component.css', 'app/assets/css/bus-edit.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], CreateBusComponent);
                return CreateBusComponent;
            }());
            exports_1("CreateBusComponent", CreateBusComponent);
        }
    }
});
//# sourceMappingURL=bus-create.component.js.map