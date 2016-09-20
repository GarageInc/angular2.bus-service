import { Injectable } from 'angular2/core';

import { Http, Response } from 'angular2/http';

import { Observable }     from 'rxjs/Observable';

import 'rxjs/Rx';

import {BaseService} from "./base/base.service";
import {Bus} from "../models/bus";
import {User} from "../models/user";
import {Carrier} from "../models/carrier";

@Injectable()
export class BusService extends BaseService{

  constructor (protected http: Http) {
    super( http);
    
    this.GATEWAY = BaseService.GATEWAY_BUSES;
  }

  getBuses (carrier:Carrier): Promise<Bus[]> {

    return this.get( this.GATEWAY+"/index",  {
          "carrier_id": carrier.id
    }, true)
        .map( this.extractDataBuses)
        .catch( this.handleError)
        .toPromise();
  }

  create ( bus:Bus):Promise<Boolean> {

    return this.post( this.GATEWAY+"/create", {
      // some other params
    }, true)
        .map(result => result ? true : false)
        .toPromise();
  }

  // UTILS

  protected extractDataBuses(res: Response) {
    let body = res.json();

    var buses:Bus[] = [];

    for (let entry of body) {
      var bus = new Bus();

      bus.fillStructure( entry)

      buses.push( bus)
    }

    return buses;
  }


}
