// metody na tablicach; destrukcyjne i niedestrukcyjne

// unshift - dodaj coś na początku tablicy
// shift - usuń coś na początku tablicy
// push - dodaj coś na końcu tablicy
// pop - usuń coś na końcu tablicy

// map - działa trochę jak pętla. Uzywa się tej metody przy funkcji. map sprawia, ze funkcja wykonuje się na kazdym kolejnym elemencie tablicy.
let numbers = [1, 3, 10, 5];

function mnozenie(x) {
    console.log(x * 2);
};

numbers.map(mnozenie);

// concat - łączy dwie tablice lub dodaje do tablicy nowe dane (umieszczone w nawiasie: let nazwaNowejTablicy = nazwaTablicy.concat(co do dodania))
const alphabet = ["a", "b", "c"];
const alphabet2 = ["d", "e", "f"];

const newAlphabet = alphabet.concat(alphabet2);

console.log(newAlphabet)

// spread - rozsmarowuje tablicę :) Rozbija tablicę na pojedyncze wartości. Metodę zapisuje się w postaci wielokropka ...

console.log(alphabet)
console.log(...alphabet)
console.log(newAlphabet)
console.log(...newAlphabet)

let newAlphabet2 = [...alphabet2, ...alphabet];
console.log(newAlphabet2)

// slice - metoda niedestrukcyjna. w nawiasach podaje się dwa argumenty. pierwszy: indeks elementu, od którego usuwamy elementy (włącznie). drugi argument: indeks elementu, do którego usuwamy (ale juz nie włączając go)

const Arr = [1,4,6,8,0];

const sliceArr = Arr.slice(2,4)
console.log(sliceArr)

console.log(Arr.slice(1,3))

// splice - metoda destrukcyjna. w nawiasach trzy argumenty: pierwszy: indeks elementu, od którego usuwamy elementy (włącznie). drugi: ilość elementów, które wycinamy. trzeci: nowy element, który wstawiamy w miejsce wyciętetgo

console.log(Arr.splice(1,3,"me"))
console.log(Arr)

// pozostałe metody: join, split, filter, forEach, includes, indexOf, lastIndexOf, reverse, sort, toString, toLocalString

// zadanie 1:

let tablica = ["obiad", "praca", "trening"];

tablica.unshift("zakupy");

console.log(tablica)

let nowaTablica = tablica;
//let nowaTablica = tablica.pop();

nowaTablica.pop();
console.log(nowaTablica)
console.log(tablica)

//zadanie 2:
let pustaTablica = [];

pustaTablica.push("text", "further text", "additional text");

console.log(pustaTablica)

//zadanie 3:

let zadanie3concat = tablica.concat(pustaTablica);
console.log(zadanie3concat)

let zadanie3spread = [...tablica, ...pustaTablica];
console.log(zadanie3spread)

//zadanie 4 (forEach):

let numbs = [2,24,35,48,90];
let numbs2 = numbs.forEach(el => console.log(el * 5));

// zadanie 5:

let zadanie5 = ["zielony"];
zadanie5.unshift("czerwony");
zadanie5.push("biały")
console.log(zadanie5)

// dwa sposoby na uycie .toUpperCase

for (let k = 0; k < zadanie5.length; k++) {
    zadanie5[k] = zadanie5[k].toUpperCase();
    console.log(`Mój ulubiony kolor to ${zadanie5[k]}`)
};

for (let k = 0; k < zadanie5.length; k++) {
    console.log(`Mój ulubiony kolor to ${zadanie5[k].toUpperCase()}`)
};

// zadanie 5 dla ambitnych:

let zadanie5amb = ["biel", "złoto", "czerń"]

for (let K = 0; K < zadanie5amb.length; K++) {
    zadanie5amb[K] = zadanie5amb[K].charAt(0).toUpperCase() + zadanie5amb[K].slice(1);
};
console.log(zadanie5amb)

for (let k = 0; k < zadanie5amb.length; k++) {
    console.log(`Mój ulubiony kolor to ${zadanie5amb[k].charAt(0).toUpperCase() + zadanie5amb[k].slice(1)}`)
};

// zadanie 6:

let zadanie6 = "Audi, Fiat, Ford, Nissan, Peugeot";

let zadanie6array = zadanie6.split(", ");
console.log(zadanie6array, zadanie6array.length)

console.log(zadanie6array.length > 3 ? "Jest OK" : "Nie jest OK...");

console.log(zadanie6array.includes("Audi") ? zadanie6array.push("BMW") : zadanie6array.pop())

if (zadanie6array.includes("Audi")) {
    zadanie6array.push("Dacia")
} else {
    zadanie6array.pop()
};

console.log(zadanie6array)

for (m = 0; m < zadanie6array.length; m++) {
    console.log(zadanie6array[m].toUpperCase())
}