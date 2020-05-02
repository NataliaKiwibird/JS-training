// FOR EACH loop

const array = ["red", "green", "blue"];
array.forEach(el => console.log(el));

// FOR loop

let cities = ["Liverpool", "Warrington", "Leeds", "Bath", "Hull"];

for (let i = 0; i < cities.length; i++) {
    console.log(`Najlepsze miasto to ${cities[i]}`)
};

// WHILE loop

let f = 0;

while (f <= 10) {
    console.log(`Liczba wynosi: ${f}`);
    // albo console.log(f);
    f += 2;
};

// DO WHILE loop

let F = 20;

do {
    F -= 3
    console.log(F)
} while (F > 0);
console.log(F);

// FOR OF loop

let nums = [5, 8, 10, 23, 48, 60];

for (let part of nums) {
    console.log(part / 5)
};

// zadanie dla ambitnych:
// zagniezdzanie instrukcji warunkowej w pętli: IF w pętli FOR OF

for (let evens of nums) {
    if (evens % 2 === 0) {
        console.log(`Liczba ${evens} jest podzielna przez 2!`)
    } else {
        console.log(`Liczba ${evens} nie jest podzielna przez 2`)
    }
}