"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Marathon = void 0;
class Marathon {
    constructor(winner, futottIdo) {
        this.winner = winner;
        this.futottIdo = futottIdo;
    }
    get date() {
        return this.date;
    }
    set date(date) {
        this.date = this.date;
    }
    result() {
        return "Marathon: " + this.futottIdo + " min";
    }
    kiir() {
        console.log(this.result());
    }
}
exports.Marathon = Marathon;
