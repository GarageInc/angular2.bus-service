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

@Component({
  selector: 'my-app',
  templateUrl: 'app/views/app/app.component.html',
  styleUrls: ['app/assets/css/app.component.css'],
  directives: [
      ROUTER_DIRECTIVES,
      // ProtectedDirective,
      LoggedInRouterOutlet
  ],
  providers: [
    ROUTER_PROVIDERS,
    UserService
  ]
})


@RouteConfig([
    {
        path: '/main',
        name: 'Main',
        component: MainComponent,
    }
    ,{
        path: '/about',
        name: 'About',
        component: AboutComponent,
        useAsDefault: true
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
  title = '@Carrier';
  subtitle = 'from PassToBus'
}
