// 'use strict' <- strict mode. umieszczany na początku kodu

// THIS:

const btns = document.querySelectorAll('button');
const p = document.querySelector('p');

for (const btn of btns) {
    btn.addEventListener('click', function () {
        p.innerText = `Ten przycisk reprezentuje cyfre ${this.innerText}.`;
    })
};

// THIS cd:

function test() {
    console.log(`To ${this.name} w wieku ${this.age}.`);
};

const ob = {
    name: "Natalia",
    age: 27,
    test: test
}

const ob2 = {
    name: "Damian",
    age: 33,
    test: test
}

ob.test()
ob2.test()

// call:
// moze, ale nie musi przyjmować argumentów
// funkcja.call(obiekt, argumenty)

function Cat (name, colour) {
    this.name = name;
    this.colour = colour;
};

function MaleCat (name, colour) {
    Cat.call(this, name, colour);
    this.sex = "chlopczyk";

    console.log(`Kotek ${this.name} ma kolor ${this.colour} i to ${this.sex}`)
};

function FemaleCat (name, colour) {
    Cat.call(this, name, colour);
    this.sex = "dziewczynka";

    console.log(`Kotek ${this.name} ma kolor ${this.colour} i to ${this.sex}`)
};

const wiktor = new MaleCat('Wiktorek', 'rudy');
const gaba = new FemaleCat('Gabrysia', 'czarny');

// apply jest jak call, tylko e call przyjmuje argumenty, a apply przyjmuje tablice
// funkcja.apply(obiekt, tablica)