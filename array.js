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

function filtroVoti(studenti){
  return studenti.filter(studente => studente.punteggio >= 60);
}

// console.log(filtroVoti(studenti));

// Scrivi una funzione che ordini un array di oggetti in base a una proprietà specificata. Usa l'array di studenti dell'esercizio precedente e ordina gli studenti in base al punteggio in ordine decrescente.


function ordineVoto(studenti, punteggio, ordine = 'desc'){
  return studenti.sort((a,b) => {
    if (a[punteggio] < b[punteggio]){
      return ordine === 'asc' ? -1 : 1;
    }
    if (a[punteggio] > b[punteggio]){
      return ordine === 'asc' ? 1 : -1;
    }
    return 0;
  });
}
const studentiOrdinati = ordineVoto(studenti, 'punteggio', 'desc');
// console.log(studentiOrdinati);

// Hai un array di oggetti che rappresentano prodotti, ognuno con proprietà nome e categoria. Scrivi una funzione che raggruppi i prodotti per categoria.

const prodotti = [
  { nome: 'Mela', categoria: 'Frutta' },
  { nome: 'Carota', categoria: 'Verdura' },
  { nome: 'Banana', categoria: 'Frutta' },
  { nome: 'Broccoli', categoria: 'Verdura' },
  { nome: 'Arancia', categoria: 'Frutta' }
];

function prodottiGroup(prodotti){
  const prodottiRaggruppati = Object.groupBy(prodotti, ({categoria}) => categoria);
  return prodottiRaggruppati;
}

// console.log(prodottiGroup(prodotti));

// Scrivi una funzione che prenda due array e restituisca un nuovo array contenente gli elementi che sono presenti in entrambi gli array (intersezione).

const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

function intersezione(array1, array2){
  // return array1.filter(numero => array2.includes(numero));
  const arrayMix = array1.filter(numero => array2.includes(numero));
  return arrayMix;
}
// console.log(intersezione(array1, array2));

// Scrivi una funzione che converta un array di coppie chiave-valore in un oggetto.

const coppie = [['nome', 'Mario'], ['cognome', 'Rossi'], ['età', 30]];

function arrToObj(coppie){
  const objArr = Object.fromEntries(coppie); // Converte l'array in oggetto con le sue chiavi-valore
  return objArr;
}
// console.log(arrToObj(coppie));

// Hai un array di oggetti che rappresentano transazioni, ciascuno con le proprietà tipo e importo. Scrivi una funzione che calcoli la somma totale degli importi per un tipo specifico di transazione.

const transazioni = [
  { tipo: 'entrata', importo: 100 },
  { tipo: 'uscita', importo: 50 },
  { tipo: 'entrata', importo: 200 },
  { tipo: 'uscita', importo: 30 },
  { tipo: 'entrata', importo: 150 }
];

function calcolaSommaPerTipo(transazioni, tipoSpecifico){
  const calcolo = transazioni.filter(transazione => transazione.tipo === tipoSpecifico)
  .reduce((accumulatore, transazione) => accumulatore + transazione.importo, 0);
  return calcolo;
}

const sommaEntrate = calcolaSommaPerTipo(transazioni, 'entrata');
const sommaUscite = calcolaSommaPerTipo(transazioni, 'uscita');

// console.log(sommaEntrate);
// console.log(sommaUscite);

// Scrivi una funzione che verifichi se tutti gli elementi di un array di numeri sono pari.

const numbers = [2, 4, 6, 8];

function evenNumbers(numbers){
  for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
      return true;
    } else {
      return false
    }
  }
 
}

// console.log(evenNumbers(numbers));


// Dato un array di numeri, scrivi una funzione che trovi e restituisca il primo numero che è maggiore di 10.

const numeri4 = [3, 7, 12, 5, 20];

function numFinder(numeri4){
  return numeri4.find(num => num > 10);
}
// console.log(numFinder(numeri4));

// Hai un array di oggetti che rappresentano persone, ciascuno con proprietà nome e età. Scrivi una funzione che restituisca un array contenente solo i nomi delle persone.

const persone = [
  { nome: 'Alice', età: 25 },
  { nome: 'Bob', età: 30 },
  { nome: 'Charlie', età: 35 }
];

function names(persone){
  return persone.map(persona => persona.nome);
}

// console.log(names(persone));

// Scrivi una funzione che prenda un array di array e restituisca un unico array con tutti gli elementi concatenati.

const arrayDiArray = [[1, 2], [3, 4], [5, 6]];

function concatena(arrayDiArray){
  return arrayDiArray.flat();
}
// console.log(concatena(arrayDiArray));


// Scrivi una funzione che prenda un oggetto e restituisca il numero di proprietà che contiene.

const auto = {
  marca: 'Fiat',
  modello: '500',
  anno: 2020
};

function proprCount(auto){
  
  return Object.keys(auto).length;

}
// console.log(proprCount(auto));


// Hai un array di oggetti che rappresentano libri, ciascuno con proprietà titolo e autore. Scrivi una funzione che aggiunga una nuova proprietà disponibile impostata a true a ogni libro.

const libri = [
  { titolo: 'Il Signore degli Anelli', autore: 'J.R.R. Tolkien' },
  { titolo: '1984', autore: 'George Orwell' },
  { titolo: 'Il Piccolo Principe', autore: 'Antoine de Saint-Exupéry' }
];


function addPropr(libri){
  libri.forEach(function(libro)  {
    libro.disponibile = true; // Aggiungo una proprietà ed una value
  });
  return libri;
}
// console.log(addPropr(libri));


// Scrivi una funzione che prenda un array di numeri e restituisca un nuovo array contenente solo i numeri pari maggiori di 10.

const numeri5 = [4, 11, 16, 7, 20, 3];

function arrChange(numeri5){
  const newArray = numeri5.filter(numero => numero % 2 === 0 && numero > 10);
  return newArray;
}

console.log(arrChange(numeri5));
