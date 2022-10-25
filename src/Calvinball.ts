import { Results } from "./Results";
export class Calvinball implements Results{
    #winner: string;

    pontszam: number;
    constructor(winner: string){
        this.#winner = winner;
        this.pontszam = Math.floor(Math.random()* (100 - 10) )+ 10;
    }
    
    get winner(){
        return this.#winner;
    }

    set winner(winner: string){
        if(winner == "Calvin" || winner == "Hobbes"){

            this.#winner = winner;

        }else{
            console.log("Rossz név van megadva!");
        }
    }

    get date(){
        return this.date;   
    }

    set date(date : Date){
        this.date = this.date;
    }

    result(): string {
        return "Calvinball: " + this.pontszam + " points";
    }

    kiir(): void{
        if(this.#winner == "Calvin"){
            console.log(this.result());
        }
        
    } 
    
}