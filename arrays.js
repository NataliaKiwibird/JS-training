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
