// Scrivi una funzione che prenda un array di numeri e restituisca la somma di tutti gli elementi.

const numeri = [1, 2, 3, 4, 5]; // 15

function somma(numeri) {
  return numeri.reduce((accumulatore, numero) => accumulatore + numero, 0);
}
// console.log(somma(numeri));


// Scrivi una funzione che trovi e restituisca il numero più grande in un array di numeri.

const numeri2 = [10, 5, 8, 20, 3];

function maxNum(numeri2){
  return Math.max(...numeri2); // Utilizzo lo spread operator per scomporre l'array e poter usare i suoi elementi
}

// console.log(maxNum(numeri2));

// Scrivi una funzione che prenda un array e restituisca un nuovo array senza elementi duplicati.

const numeri3 = [1, 2, 2, 3, 4, 4, 5];

function noDouble(numeri3){
    // Con la funzione Set converto l'array in un oggetto privo di duplicati
    let numeriSingoli = new Set(numeri3); 
    // Converto poi il risultato in un nuovo Array
    let numeriSingoliArray = [...numeriSingoli];
    return(numeriSingoliArray)
}
// console.log(noDouble(numeri3));

// Scrivi una funzione che prenda un array e un valore, e conti quante volte quel valore appare nell'array.

const lettere = ['a', 'b', 'a', 'c', 'a', 'b'];
const valore = 'a';

function contaOccorrenze(lettere, valore){
  return lettere.reduce((accumulatore, elemento)=> {
    return elemento === valore ? accumulatore + 1 : accumulatore;
  }, 0);
}

// console.log(contaOccorrenze(lettere, valore));

// Scrivi una funzione che prenda un oggetto e restituisca un nuovo oggetto con chiavi e valori invertiti.

const persona = {
  nome: 'Mario',
  cognome: 'Rossi',
  età: 30
};

function inverseObject(persona){
  const newObj = {};
  for(const key in persona){
    newObj[persona[key]] = key;
  }
  return newObj;
}
const invertito = inverseObject(persona);
// console.log(invertito);

// Hai un array di oggetti che rappresentano studenti, ciascuno con proprietà nome e punteggio. Scrivi una funzione che restituisca un array con gli studenti che hanno ottenuto un punteggio maggiore o uguale a 60.

const studenti = [
  { nome: 'Luca', punteggio: 45 },
  { nome: 'Anna', punteggio: 75 },
  { nome: 'Marco', punteggio: 60 },
  { nome: 'Sara', punteggio: 85 },
  { nome: 'Elisa', punteggio: 50 }
];

// If per controllare che i punteggi siano >= a 60
// Creazione nuovo array con elementi filtrati

function controlloVoti(studenti){
  return studenti.filter(studente => studente.punteggio >= 60);
}

console.log(controlloVoti(studenti));


