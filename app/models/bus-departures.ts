import {Synchronizable} from "./base/Synchronizable";

export class BusDepartures extends Synchronizable {

    id: string;


    fillStructure(body:any){

        this.fillFromJSON(body);


    }
}
