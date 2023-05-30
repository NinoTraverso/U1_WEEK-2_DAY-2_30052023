/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* RISPOSTA 1
const primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23]
const largestPrimeNumber = Math.max.apply (Math,primeNumbers);
console.log ('Largest number in the array is:', largestPrimeNumber) */

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* RISPOSTA 2
const wholeNumber = 6;
if (wholeNumber < 5) {
  console.log("not equal");
} else if (wholeNumber > 5) {
  console.log("not equal");
} else {
  console.log("number is equal");
} */

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* RISPOSTA 3
const x = 20;
if (x %5 === 0) {
  console.log("divisible by 5");
} else if (x %5 !==0) {
  console.log("not divisible by 5");
}  */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* RISPOSTA 4
const x = 8;
const y = 8;

if (x === 8) {
  console.log("x equals to", x);
} else if (x !== 8) {
  console.log("x does not equal 8, but equals", x);
}

if (y === 8) {
  console.log("y equals to", y);
} else if (y !== 8) {
  console.log("y does not equal 8, but equals", y);
}

if (x === 8 && y === 8) {
  console.log("Both x and y are equal to 8");
} else if (x === 8 && y !== 8) {
  console.log("x is equal to 8 but not y");
} else if (x !== 8 && y === 8) {
  console.log("y is equal to 8 but not x");
} else if (x !== 8 && y !== 8) {
  console.log("Neither x or y are equal to 8");
}

if (x + y === 8) {
  console.log("Adding x and y does equal to 8");
} else if (x + y !== 8) {
  console.log("Adding x and y does not equal to 8");
}

if (x - y === 8) {
  console.log("x minus y is equal to 8,but then y minus x does not equal 8");
} else if (y - x === 8) {
  console.log("y minus x is equal to 8,but then x minus y does not equal 8");
} else if (y - x !== 8 && x - y !== 8) {
  console.log("x minus y does not euqal 8, and y minus x does not equal to 8");
}

*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* RISPOSTA 5

let totalShoppingCart = 70
const shipppingCost = 10;

if (totalShoppingCart < 50) {
  console.log("Total cost is:", totalShoppingCart + shipppingCost);
} else if (totalShoppingCart >= 50) {
  console.log ('Total cost is:', totalShoppingCart)
} */

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* RISPOSTA 7

let totalShoppingCart = 20
const shipppingCost = 10;
const blackFridayPromotionDiscount = 20;
let totalShoppingCartBlackFridayPercentage = (totalShoppingCart)/100;
let totalShoppingCartBlackFridayDiscount = (totalShoppingCartBlackFridayPercentage) * (blackFridayPromotionDiscount);
let totalShoppingCartBlackFriday = (totalShoppingCart) - (totalShoppingCartBlackFridayDiscount);
console.log (totalShoppingCartBlackFriday)

if (totalShoppingCartBlackFriday < 50) {
  console.log("Total cost is:", totalShoppingCartBlackFriday + shipppingCost);
} else if (totalShoppingCartBlackFriday >= 50) {
  console.log ('Total cost is:', totalShoppingCartBlackFriday)
} */

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* RISPOSTA 7 

const x = 7;
const y = 2;
const z = 5;

const xyz = [x, y, z]
xyz.sort ()
console.log ('I numeri delle variabili, dal più alto al piu basso sono:', xyz)
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* RISPOSTA 8

const x = 8

if (typeof x === Number) {
  console.log ('x is a number')
} else if (typeof x !== Number) {
  console.log ('x is not a number')
}
*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* RISPOSTA 9

const x = 144

if (x %2 === 0) {
  console.log ('x =', x,  'so it is even')
} else if (x %2 !== 0) {
  console.log ('x =', x,  'so it is odd')
}

*/

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/*  RISPOTA 10

let val = 10
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }

*/

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/* RISPOSTA 11

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto'
}

console.log (me)
} */

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* RISPOSTA 12
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto'
}

delete me.lastName

console.log (me)
*/

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* RISPOSTA 13

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: 'Toronto'
}

delete me.lastName
me.skills.pop (2);

console.log (me)

*/

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* RISPOSTA 14

const numbers = []

numbers.push (1,2,3,4,5,6,7,8,9,10)

console.log ("I numeri dentro l'array sono:", numbers)

*/

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* RISPOSTA 15

const numbers = []

numbers.push (1,2,3,4,5,6,7,8,9,10)


numbers.pop (9)
numbers.push (100)

console.log ("I numeri dentro l'array sono:", numbers)
*/
