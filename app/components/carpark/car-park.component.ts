import { Component, OnInit } from 'angular2/core';
import { ViewEncapsulation} from "angular2/core";
import { Router } from 'angular2/router';
import {Bus} from "../../models/bus";
import {UserState} from "../../models/states/user.state";
import {BusService} from "../../services/bus.service";


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'car-park',
  templateUrl: 'app/views/carpark/car-park.component.html',
  styleUrls: ['app/assets/css/car-park.component.css']
})


export class CarParkComponent implements OnInit {

  buses: Bus[] = [];

  constructor(
      protected  _busService: BusService
  ) {
  }

  ngOnInit() {
    //this._busService.getBuses( UserState.activeUser.carrier)
    //    .then( buses => this.buses = buses);
  }

  editBus(bus:Bus){

  }
}
