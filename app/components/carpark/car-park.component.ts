import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';


@Component({
  selector: 'car-park',
  templateUrl: 'app/views/main.component.html',
  styleUrls: ['app/assets/css/main.component.css']
})


export class CarParkComponent implements OnInit {


  constructor(
    protected _router: Router
  ) {
  }

  ngOnInit() {
  }

}
