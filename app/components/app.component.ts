import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {Component, ViewEncapsulation} from "angular2/core";

import {UserService} from "../services/user.service";
//
import { LoggedInRouterOutlet } from "../directives/logged-in-router-outlet";
import { LoginComponent } from './user/login.component';
import { ProfileComponent } from './user/profile.component';
import {ProtectedDirective} from "../directives/protected-directive";
import {LogoutComponent} from "./user/logout.component";

import {MainComponent} from "./main.component";
import {AboutComponent} from "./about/about.component";
import {CarParkComponent} from "./carpark/car-park.component";
import {CreateBusComponent} from "./carpark/create-bus.component";
import {ReservateTicketComponent} from "./tickets/reservate-ticket.component";
import {TripsComponent} from "./trips/trips.component";

@Component({
    encapsulation: ViewEncapsulation.None,
    selector: 'bus-service-app',

    templateUrl: 'app/views/app/app.component.html',
    styleUrls: ['app/assets/css/app.component.css'],

    directives: [
      ROUTER_DIRECTIVES,
      LoggedInRouterOutlet
    ],
    providers: [
    ROUTER_PROVIDERS,
    UserService
    ]
})


@RouteConfig([
    {
        path: '/about',
        name: 'About',
        component: AboutComponent,
        useAsDefault: true
    }
    ,{
        path: '/carpark',
        name: 'CarPark',
        component: CarParkComponent,
    }
    ,{
        path: '/carpark/create',
        name: 'CreateBus',
        component: CreateBusComponent,
    }
    ,{
        path: '/tickets',
        name: 'ReservateTicket',
        component: ReservateTicketComponent,
    }
    ,{
        path: '/trips',
        name: 'Trips',
        component: TripsComponent,
    }
    ,{
        path: '/trips/create',
        name: 'CreateTrip',
        component: TripsComponent,
    }
    ,{
        path: '/login',
        name: 'Login',
        component: LoginComponent
    }
    ,{
        path: '/logout',
        name: 'Logout',
        component: LogoutComponent
    }
])

export class AppComponent {

}
