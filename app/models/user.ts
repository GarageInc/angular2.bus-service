import {Synchronizable} from "./base/Synchronizable";
import {Carrier} from "./carrier";

export class User extends Synchronizable {

    username:string;

    carrier:Carrier;

    reset(){
        localStorage.clear()
    }

    get pub_token():string {
        return localStorage.getItem("pub_token");
    }
    set pub_token(pub_token:string) {
        localStorage.setItem("pub_token", pub_token);
    }

    get pub_secret():string {
        return localStorage.getItem("pub_secret");
    }
    set pub_secret(pub_secret:string) {
        localStorage.setItem("pub_secret", pub_secret);
    }

    get user_id():string {

        return localStorage.getItem("id");
    }
    set user_id(id:string) {
        localStorage.setItem("id", id);
    }

}
