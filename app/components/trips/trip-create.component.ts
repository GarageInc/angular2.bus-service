import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';
import {Day} from "../../models/day_in_week";


@Component({
  selector: 'trip-create',
  templateUrl: 'app/views/trips/trip-create.component.html',
  styleUrls: ['app/assets/css/trip-create.component.css']
})


export class TripCreateComponent implements OnInit {

  public daysInWeek:Array<Day> = [];

  constructor(
    protected _router: Router
  ) {
  }

  ngOnInit() {

    this.daysInWeek = new Array<Day>();

    this.daysInWeek.push(new Day(0,"Понедельник", false, false));
    this.daysInWeek.push(new Day(1,"Вторник", false, false));
    this.daysInWeek.push(new Day(2,"Среда", false, false));
    this.daysInWeek.push(new Day(3,"Четверг", false, false));
    this.daysInWeek.push(new Day(4,"Пятница", false, false));
    this.daysInWeek.push(new Day(5,"Суббота", false, true));
    this.daysInWeek.push(new Day(6,"Воскресенье", false, true));
  }

  save(){

  }

  add(){

  }

  goBack(){

  }

}
