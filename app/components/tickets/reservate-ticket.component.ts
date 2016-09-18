import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';


@Component({
  selector: 'reservate-ticket',
  templateUrl: 'app/views/main.component.html',
  styleUrls: ['app/assets/css/main.component.css']
})


export class ReservateTicketComponent implements OnInit {


  constructor(
    protected _router: Router
  ) {
  }

  ngOnInit() {
  }

}
