System.register(['angular2/core', "angular2/core", "../../services/bus.service"], function(exports_1) {
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
    var core_1, core_2, bus_service_1;
    var CarParkComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (bus_service_1_1) {
                bus_service_1 = bus_service_1_1;
            }],
        execute: function() {
            CarParkComponent = (function () {
                function CarParkComponent(_busService) {
                    this._busService = _busService;
                    this.buses = [];
                }
                CarParkComponent.prototype.ngOnInit = function () {
                    //this._busService.getBuses( UserState.activeUser.carrier)
                    //    .then( buses => this.buses = buses);
                };
                CarParkComponent.prototype.editBus = function (bus) {
                };
                CarParkComponent = __decorate([
                    core_1.Component({
                        encapsulation: core_2.ViewEncapsulation.None,
                        selector: 'car-park',
                        templateUrl: 'app/views/carpark/car-park.component.html',
                        styleUrls: ['app/assets/css/car-park.component.css']
                    }), 
                    __metadata('design:paramtypes', [bus_service_1.BusService])
                ], CarParkComponent);
                return CarParkComponent;
            })();
            exports_1("CarParkComponent", CarParkComponent);
        }
    }
});
//# sourceMappingURL=car-park.component.js.map