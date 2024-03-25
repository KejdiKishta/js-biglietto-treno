// !INPUT

//* km da percorrere
let totalKm = prompt ("Ciao! Quanti km devi percorrere?"); //? string | null
totalKm = parseInt (totalKm); //? from string to number
console.log(totalKm, typeof totalKm);

//* età del passeggero
let passAge = prompt ("Ok! quanti anni hai?"); //? string | null
passAge = parseInt (passAge); //? from string to number
console.log(passAge, typeof passAge);

// !LOGICA

//* costo del biglietto
const ticketCost = totalKm * 0.21 //? number | null
console.log(ticketCost, typeof ticketCost);

//* variabile per i blocchi
let finalPrice; //? number | null

//* sconti in base all'età
if (passAge > 0 && passAge < 18) {
    finalPrice = ticketCost * 0.80
} else if (passAge > 65) {
    finalPrice = ticketCost * 0.60
} else {
    finalPrice = ticketCost
}

console.log(finalPrice, typeof finalPrice);