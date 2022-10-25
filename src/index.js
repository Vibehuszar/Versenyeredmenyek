"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Football_1 = require("./Football");
const Marathon_1 = require("./Marathon");
const Calvinball_1 = require("./Calvinball");
let sportok = [
    new Football_1.Football("Olasz", "4-2"),
    new Football_1.Football("Német", "3-1"),
    new Marathon_1.Marathon("Laci", 34),
    new Marathon_1.Marathon("Gábor", 50),
    new Calvinball_1.Calvinball("Css"),
    new Calvinball_1.Calvinball("ads")
];
for (let s of sportok) {
    s.kiir();
}
