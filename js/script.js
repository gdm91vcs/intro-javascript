// stringa
let username = "Gabriele";
let frase = 'che bella macchina'
let color = `verde` //backtick

// operazioni stringhe
// concatenazione
const result = `${username} ha detto: ${frase}!`;
console.log(result);
/* console.log(result.charAt(8)); sapere che lettera c'è in quella posizione*/ 
/* console.log(result.length); sapere quanto è lunga l intera frase*/
/* console.log(result.substring(0,10)); selezionare una determinata porzione della frase */
/* console.log (result.includes("w")); sapere se c è una lettera specifica/numero */

/* // numero
let userAge = 25;
console.log(userAge)

const difference = 10;/* */

/* const result = userAge - difference;
console.log(result); */

// esercizi in classe live
/* let firstNumber = 10;
let secondNumber = firstNumber - 2; //8

console.log(firstNumber + secondNumber); */

/* let firstNumber = "10";
let secondNumber = 2;
let result firstNumber + secondNumber;

console.log(result); */

/* let firstNumber = 10;
let totalPrice = firstNumber * 2 + "kg";
console.log(totalPrice); */

/* const number1String = "34";
const number1 = parseInt(number1String);
const number2 = 5;

const result = number1 + number2;

console.log(result); */

/* const number1 = "34";
const number2 = 5;
const number2String = number2.toString();
console.log(number2String)

const result = number1 + number2;

console.log(result); */

// ESERCIZIO 1
/* Sistema di calcolo del risparmio annuo dell utente. 
Un sistema dell investimento nella quale l utente investe il 5% del suo stipnedio mensile.
Alla fine dell anno viene garantito il rendimento del 10%.
Chiedi all utente qual e il suo stipendio mensile e in base alla sua risposta calcola la somma totale investita nell arco dell anno e la somma di interessi totali.

es: utente inserisce 1000 euro al mese, quindi l investimento sara pari a 600 euro.
interessi: 60 euro 

DATI A DISPOSIZIONE: lo Stipendio (1000 euro),investimento mensile 5%, rendimento dfinale 10%, mesi totali 12.

CALCOLO/IMPLEMENTAZIONE LOGICA: cerchiamo ora di apparecchiare tutto e di creare le prime variabili.
1. calcolare il 5% dello Stipendio mensile in euro:
investimentoMensile = Stipendio * percInvestimento/100

2. calcolare la somma alla fine dell anno:
investimentoAnnuale = investimentoMensile * mesi

3. calcolare gli interessi finali:
interessiFinali = investimentoAnnuale *rendimentoFinale/100

STAMPA DEL RISULTATO: preparo la frase finale: Con lo Stipendio mensile, alla fine dell anno avrai interessiFinali ... ; 
stampo la frase;
*/

/* const stipendioMensile = 1000;
const investimentoMensilePerc = 5;
const guadagnoPerc = 10;
const numMesi = 12;

const accantonamentoMensile = (stipendioMensile * investimentoMensilePerc) / 100;
console.log(accantonamentoMensile);

const accantonamentAnnuale = accantonamentoMensile * numMesi;
console.log(accantonamentAnnuale);

const interessiFinali = (accantonamentAnnuale * guadagnoPerc) / 100;
console.log(interessiFinali);

// fine esercizio creazione frase finale (OUTPUT)
const messaggio = `Con lo stipendio mensile di ${stipendioMensile} alla fine dell anno avrai come interesse maturato di ${interessiFinali}€`
console.log(messaggio); */

