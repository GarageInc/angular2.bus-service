import { Component, OnInit, ViewEncapsulation } from 'angular2/core';
import { Router } from 'angular2/router';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'bus-edit',
  templateUrl: 'app/views/carpark/bus-trips.component.html',
  styleUrls: ['app/assets/css/bus-trips.component.css']
})


export class BusTripsComponent implements OnInit {


  constructor(
    protected _router: Router
  ) {
  }

  ngOnInit() {
  }

}
