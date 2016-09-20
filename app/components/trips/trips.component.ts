import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';


@Component({
  selector: 'trips',
  templateUrl: 'app/views/trips/trips.component.html',
  styleUrls: ['app/assets/css/trips.component.css']
})


export class TripsComponent implements OnInit {


  constructor(
    protected _router: Router
  ) {
  }

  ngOnInit() {
  }

}
