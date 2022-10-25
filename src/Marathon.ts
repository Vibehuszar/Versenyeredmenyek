import { Results } from "./Results";
export class Marathon implements Results{
    winner: string;
    futottIdo: number;

    constructor(winner: string, futottIdo: number){
        this.winner = winner;
        this.futottIdo = futottIdo;
    }

    get date(){
        return this.date;   
    }

    set date(date : Date){
        this.date = this.date;
    }
    
    result(): string {
        return "Marathon: " + this.futottIdo + " min";
    }

    kiir(): void{
        console.log(this.result());
    } 
    
}