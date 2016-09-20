import { Component, OnInit, ViewEncapsulation } from 'angular2/core';
import { Router } from 'angular2/router';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'bus-edit',
  templateUrl: 'app/views/carpark/bus-edit.component.html',
  styleUrls: ['app/assets/css/bus-edit.component.css']
})


export class EditBusComponent implements OnInit {


  constructor(
    protected _router: Router
  ) {
  }

  ngOnInit() {
  }

}
