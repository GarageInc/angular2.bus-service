import {Synchronizable} from "./base/Synchronizable";
import {User} from "./user";
import {Carrier} from "./carrier";
import {BusMark} from "./busmark";

export class Bus extends Synchronizable {

    id: string;
    busname: string;
    user: User;
    carrier: Carrier;
    busmark: BusMark
    bus_number: String;
    year_of_issue: Date;
    goverment_number:string;
    registration_certificate:string;
    has_folding_chairs:Boolean;
    has_air_conditioning: Boolean;
    has_internet: Boolean;
    has_tv:Boolean;
    has_restroom:Boolean;


    fillStructure(body:any){

        this.fillFromJSON(body);


    }
}
