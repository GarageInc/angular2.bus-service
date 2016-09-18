import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';


@Component({
  selector: 'trips',
  templateUrl: 'app/views/main.component.html',
  styleUrls: ['app/assets/css/main.component.css']
})


export class TripsComponent implements OnInit {


  constructor(
    protected _router: Router
  ) {
  }

  ngOnInit() {
  }

}
