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
    var TripsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            TripsComponent = (function () {
                function TripsComponent(_router) {
                    this._router = _router;
                }
                TripsComponent.prototype.ngOnInit = function () {
                };
                TripsComponent = __decorate([
                    core_1.Component({
                        selector: 'trips',
                        templateUrl: 'app/views/trips/trips.component.html',
                        styleUrls: ['app/assets/css/trips.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], TripsComponent);
                return TripsComponent;
            })();
            exports_1("TripsComponent", TripsComponent);
        }
    }
});
//# sourceMappingURL=trips.component.js.map