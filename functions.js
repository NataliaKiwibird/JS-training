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