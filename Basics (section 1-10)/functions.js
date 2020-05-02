// funkcja nazwana/ imienna
function hello(name, age) {
console.log(`Cześć, mam na imię ${name} i mam ${age} lat!`)
};

hello("Funkcja", 0)

// wyrazenie funkcyjne

const wyrFunkcyjne = function () {
    console.log("Siemka! Jestem wyrazeniem funkcyjnym")
};

wyrFunkcyjne()


// funkcja strzałkowa () => {}
// jeśli funkcja posiada jeden parametr(/argument?) i wykonuje tylko jedną instrukcję, mozemy pozbyć się nawiasów okrągłych i klamrowych
// jesli funkcja tylko cos zwraca, nie musimy dawac return

const funkcjaStrzalkowa = (name, age) => {
    console.log(`To jest ${name}, ktora ma ${age} lat`)
};

funkcjaStrzalkowa("Funkcja strzałkowa", 0)

// domyślne parametry funkcji
// mozna podać w nawiasach () po parametrze i =, np. (name = "drogi uzytkowniku")

const hi = (name = "drogi uzytkowniku") => {
    return `Witaj ${name}, jak się masz?`
}
console.log(hi())
console.log(hi("Maja"))

// spread - rozsmarowywuje tablicę (rozdziela ją na stringi). Wielokropek ... przed nazwą funkcji przy jej wywołaniu

const list = ["task1", "task2", "task3"];
console.log(...list)

// rest - łączy mniejsze elementy (stringi) w tablice. Wielopkropek ... przed parametrem

function restTest (M, ...N) {
    console.log(M, N);
}
restTest(2,6,9)

// callback - wcześniej stworzona juz funkcja, którą przywołujemy jako argument w innej części kodu

// Zadanie 1:

let score;

function Add (o,p) {
    score = o + p;
    if (score % 2 === 0) {
        funkcjaEven()
    } else {
        funkcjaOdd()
    };
};

const funkcjaEven = function () {
    console.log(`Liczba ${score} jest parzysta`)
};

const funkcjaOdd = () => {
    console.log(`Liczba ${score} jest nieparzysta`)
};

Add(3,21)

// Zadanie 2:

let cels;
let temp;

function fahrenheit (x) {
    cels = x;
    temp = cels * 1.8 + 32
};

fahrenheit(14);
console.log(`${cels}°C to ${temp}°F.`)
console.log(`${temp}°F to ${cels}°C.`)

// Zadanie 3:

let numm = 10;
let numberss = [];

for (let r = 0; r < numm; r++) {
    numberss.push(r)
};
console.log(numberss)

const funkcjaa = (xx) => {
    if (xx !== 0 && xx % 3 === 0) {
        console.log(`${xx} jest podzielne przez 3.`)
    } else {
        console.log(`${xx} nie jest podzielne przez 3.`)
    };
};

const newVar = numberss.forEach(funkcjaa);

