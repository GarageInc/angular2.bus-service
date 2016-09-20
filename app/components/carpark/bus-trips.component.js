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
    var BusTripsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            BusTripsComponent = (function () {
                function BusTripsComponent(_router) {
                    this._router = _router;
                }
                BusTripsComponent.prototype.ngOnInit = function () {
                };
                BusTripsComponent = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.None,
                        selector: 'bus-edit',
                        templateUrl: 'app/views/carpark/bus-trips.component.html',
                        styleUrls: ['app/assets/css/bus-trips.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], BusTripsComponent);
                return BusTripsComponent;
            })();
            exports_1("BusTripsComponent", BusTripsComponent);
        }
    }
});
//# sourceMappingURL=bus-trips.component.js.map