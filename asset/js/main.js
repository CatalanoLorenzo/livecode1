alert("funziona") ;
//chiediamo all'utente la sua età e comunichiamo l'anno di nascità


// uso prompt per chiedere l'eta all'utente
let userAge = prompt("Quanti anni hai?");
console.log (userAge);

// creao variabile cost con l'anno attuale
const year = 2023;

//salvo il risultato della sottrazione delle due variabili in una nuova variabile
let result = year - userAge;

//stampo a schermo il risultato
console.log (result);

let element = document.getElementById("anno");
console.log (element);
element.innerHTML = "result: " + result;