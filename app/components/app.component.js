System.register(['angular2/router', "angular2/core", "../services/user.service", "../services/bus.service", "../directives/logged-in-router-outlet", './user/login.component', "./user/logout.component", "./about/about.component", "./carpark/car-park.component", "./carpark/bus-create.component", "./tickets/reservate-ticket.component", "./trips/trips.component", "./carpark/bus-edit.component", "./trips/trip-create.component", "./carpark/bus-trips.component"], function(exports_1, context_1) {
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
    var router_1, core_1, user_service_1, bus_service_1, logged_in_router_outlet_1, login_component_1, logout_component_1, about_component_1, car_park_component_1, bus_create_component_1, reservate_ticket_component_1, trips_component_1, bus_edit_component_1, trip_create_component_1, bus_trips_component_1;
    var AppComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (user_service_1_1) {
                user_service_1 = user_service_1_1;
            },
            function (bus_service_1_1) {
                bus_service_1 = bus_service_1_1;
            },
            function (logged_in_router_outlet_1_1) {
                logged_in_router_outlet_1 = logged_in_router_outlet_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (logout_component_1_1) {
                logout_component_1 = logout_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            },
            function (car_park_component_1_1) {
                car_park_component_1 = car_park_component_1_1;
            },
            function (bus_create_component_1_1) {
                bus_create_component_1 = bus_create_component_1_1;
            },
            function (reservate_ticket_component_1_1) {
                reservate_ticket_component_1 = reservate_ticket_component_1_1;
            },
            function (trips_component_1_1) {
                trips_component_1 = trips_component_1_1;
            },
            function (bus_edit_component_1_1) {
                bus_edit_component_1 = bus_edit_component_1_1;
            },
            function (trip_create_component_1_1) {
                trip_create_component_1 = trip_create_component_1_1;
            },
            function (bus_trips_component_1_1) {
                bus_trips_component_1 = bus_trips_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        encapsulation: core_1.ViewEncapsulation.None,
                        selector: 'bus-service-app',
                        templateUrl: 'app/views/app/app.component.html',
                        styleUrls: ['app/assets/css/app.component.css'],
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            logged_in_router_outlet_1.LoggedInRouterOutlet
                        ],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            user_service_1.UserService,
                            bus_service_1.BusService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/about',
                            name: 'About',
                            component: about_component_1.AboutComponent,
                        },
                        {
                            path: '/carpark',
                            name: 'CarPark',
                            component: car_park_component_1.CarParkComponent,
                        },
                        {
                            path: '/carpark/bus/create',
                            name: 'CreateBus',
                            component: bus_create_component_1.CreateBusComponent,
                        },
                        {
                            path: '/carpark/bus/edit',
                            name: 'EditBus',
                            component: bus_edit_component_1.EditBusComponent,
                        },
                        {
                            path: '/carpark/bus/trips',
                            name: 'BusTrips',
                            component: bus_trips_component_1.BusTripsComponent,
                        },
                        {
                            path: '/tickets',
                            name: 'ReservateTicket',
                            component: reservate_ticket_component_1.ReservateTicketComponent,
                        },
                        {
                            path: '/trips',
                            name: 'Trips',
                            component: trips_component_1.TripsComponent,
                        },
                        {
                            path: '/trips/create',
                            name: 'CreateTrip',
                            component: trip_create_component_1.TripCreateComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/login',
                            name: 'Login',
                            component: login_component_1.LoginComponent
                        },
                        {
                            path: '/logout',
                            name: 'Logout',
                            component: logout_component_1.LogoutComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map