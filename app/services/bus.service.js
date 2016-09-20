System.register(['angular2/core', 'angular2/http', 'rxjs/Rx', "./base/base.service", "../models/bus"], function(exports_1) {
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
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
    var core_1, http_1, base_service_1, bus_1;
    var BusService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (base_service_1_1) {
                base_service_1 = base_service_1_1;
            },
            function (bus_1_1) {
                bus_1 = bus_1_1;
            }],
        execute: function() {
            BusService = (function (_super) {
                __extends(BusService, _super);
                function BusService(http) {
                    _super.call(this, http);
                    this.http = http;
                    this.GATEWAY = base_service_1.BaseService.GATEWAY_BUSES;
                }
                BusService.prototype.getBuses = function (carrier) {
                    return this.get(this.GATEWAY + "/index", {
                        "carrier_id": carrier.id
                    }, true)
                        .map(this.extractDataBuses)
                        .catch(this.handleError)
                        .toPromise();
                };
                BusService.prototype.create = function (bus) {
                    return this.post(this.GATEWAY + "/create", {}, true)
                        .map(function (result) { return result ? true : false; })
                        .toPromise();
                };
                // UTILS
                BusService.prototype.extractDataBuses = function (res) {
                    var body = res.json();
                    var buses = [];
                    for (var _i = 0; _i < body.length; _i++) {
                        var entry = body[_i];
                        var bus = new bus_1.Bus();
                        bus.fillStructure(entry);
                        buses.push(bus);
                    }
                    return buses;
                };
                BusService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], BusService);
                return BusService;
            })(base_service_1.BaseService);
            exports_1("BusService", BusService);
        }
    }
});
//# sourceMappingURL=bus.service.js.map