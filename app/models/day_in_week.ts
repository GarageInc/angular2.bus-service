import {Synchronizable} from "./base/Synchronizable";
import {User} from "./user";
import {Carrier} from "./carrier";
import {BusMark} from "./busmark";

export class Day {

    constructor(
        protected index: number,
        protected name: string,
        protected is_selected: boolean,
        protected is_holiday: boolean
    ) {
    }
}
