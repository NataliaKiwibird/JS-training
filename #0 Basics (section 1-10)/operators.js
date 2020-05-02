// OPERATORY ARYTMETYCZNE:
// add, subtract, multiply, divide

let x = 5;
let y = 6;

const add = x + y;
console.log(add);

const subtract = x - y;
console.log(subtract);

const multiply = x * y;
console.log(multiply);

const divide = x / y;
console.log(divide);

// OPERATORY ARYTMETYCZNE:
// modulo %
// inkrementacja ++
// dekrementacja --
// potęgowanie **

//modulo zwraca resztę z dzielenia (10/3=3, reszta:1)
const modulo = 10 % 3;
console.log(modulo);

// inkrementacja i dekrementacja: powiększanie lub zmniejszanie liczby o 1
x++;
x++;
console.log(x)
y--;
y--;
console.log(y)

// potęgowanie moze nie być jeszcze wspierane przez starsze przeglądarki
console.log(x ** 2)
console.log(x ** 3)

// OPERATORY PRZYPISANIA:
// = += -= *= /= %=

x += y;
x = x + y;

x -= y;
x = x - y;

x *= y;
x = x * y;

x /= y;
x = x / y;

x %= y;
x = x % y;

// OPERATORY PORÓWNANIA:
// == === != !== > >= < <=

console.log(5 == "5"); // == porównuje wartości
console.log(5 === "5"); // === porównuje wartości i ich typy
console.log(5 != "5"); // != sprawdza, czy wartości są rózne
console.log(5 !== "5"); // !== sprawdza, czy wartości i typy są rózne

// OPERATORY LOGICZNE:
// && AND zwraca TRUE wyłącznie, gdy WSZYSTKIE warunki są prawdziwe
let a = 10;
let b = 20;

if (a > 0 && b > a) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}

if (a > 0 && b < a) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}
// || OR zwraca TRUE, jeśli choć jeden z warunków jest prawdziwy (lub wszystkie)
if (a > 0 || b > a) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}

if (a > 0 || b < a) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}
// ! zaprzeczenie
// let a = 10;
// let b = 20;
if (!(a == b)) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}
if (!(a < b)) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}