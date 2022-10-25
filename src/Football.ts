import { Results } from "./Results";
export class Football implements Results{

    winner: string;
    #golokSzama : string;

    constructor(winner : string, golokSzama : string){
        this.winner = winner;
        this.#golokSzama = golokSzama;
    }

    get date(){
        return this.date;   
    }

    set date(date : Date){
        this.date = this.date;
    }
    result(): string {
        return  "Football match: " + this.#golokSzama;
    }

    kiir(): void{
        console.log(this.result());
    }   

}