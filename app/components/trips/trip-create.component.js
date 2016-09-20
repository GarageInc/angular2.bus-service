System.register(['angular2/core', 'angular2/router', "../../models/day_in_week"], function(exports_1) {
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
    var core_1, router_1, day_in_week_1;
    var TripCreateComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (day_in_week_1_1) {
                day_in_week_1 = day_in_week_1_1;
            }],
        execute: function() {
            TripCreateComponent = (function () {
                function TripCreateComponent(_router) {
                    this._router = _router;
                    this.daysInWeek = [];
                }
                TripCreateComponent.prototype.ngOnInit = function () {
                    this.daysInWeek = new Array();
                    this.daysInWeek.push(new day_in_week_1.Day(0, "Понедельник", false, false));
                    this.daysInWeek.push(new day_in_week_1.Day(1, "Вторник", false, false));
                    this.daysInWeek.push(new day_in_week_1.Day(2, "Среда", false, false));
                    this.daysInWeek.push(new day_in_week_1.Day(3, "Четверг", false, false));
                    this.daysInWeek.push(new day_in_week_1.Day(4, "Пятница", false, false));
                    this.daysInWeek.push(new day_in_week_1.Day(5, "Суббота", false, true));
                    this.daysInWeek.push(new day_in_week_1.Day(6, "Воскресенье", false, true));
                };
                TripCreateComponent.prototype.save = function () {
                };
                TripCreateComponent.prototype.add = function () {
                };
                TripCreateComponent.prototype.goBack = function () {
                };
                TripCreateComponent = __decorate([
                    core_1.Component({
                        selector: 'trip-create',
                        templateUrl: 'app/views/trips/trip-create.component.html',
                        styleUrls: ['app/assets/css/trip-create.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], TripCreateComponent);
                return TripCreateComponent;
            })();
            exports_1("TripCreateComponent", TripCreateComponent);
        }
    }
});
//# sourceMappingURL=trip-create.component.js.map