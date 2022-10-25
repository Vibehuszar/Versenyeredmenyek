import { Results } from "./Results";
import { Football } from "./Football";
import { Marathon } from "./Marathon";
import { Calvinball } from "./Calvinball";


let sportok: Results[] = [
    new Football("Olasz", "4-2"),
    new Football("Német", "3-1"),
    new Marathon ("Laci", 34),
    new Marathon ("Gábor", 50),
    new Calvinball("Calvin"),
    new Calvinball("Hobb")
];



for(let s of sportok){
    s.kiir();
}





