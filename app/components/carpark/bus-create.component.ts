import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {Bus} from "../../models/bus";
import { ViewEncapsulation} from "angular2/core";


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'create-bus',
  templateUrl: 'app/views/carpark/bus-edit.component.html',
  styleUrls: ['app/assets/css/car-park.component.css','app/assets/css/bus-edit.component.css']
})


export class CreateBusComponent implements OnInit {

  public bus:Bus;

  constructor(
    protected _router: Router
  ) {
    this.bus = new Bus();
  }

  ngOnInit() {
  }

}
