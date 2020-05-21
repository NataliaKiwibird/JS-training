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
// call, apply i bind uzywane podczas wywolywania funkcji
// te metody łączą funkcję z obiektem
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

// funkcja strzałkowa z thisem działa inaczej, niz normalnie, dlatego przy this nie warto uzywać funkcji strzałkowej :P

// Przykłdy call i apply:

function add(c, d) {
    return this.a + this.b + c + d;
};

const numbers = {
    a: 1,
    b: 7
}

console.log(add.call(numbers, 3, 7))

console.log(add.apply(numbers, [3, 5]))

// przykład bind:

const user = {
    name: "Gaba"
}

const showUser = function () {
    console.log(this.name);
};

showUser.bind(user)()

// Zadanie:

const person = {
    name: 'Gaba',
    age: 10,
    'fav-color': 'niebieski',
    car : {
        brand: 'Audi'
    }
}

function one () {
    console.log(`${this.name} ma ${this.age} lat, a jej ulubiony kolor to ${this['fav-color']}.`)
};

one.bind(person)()

function two () {
    this.car.color = "czarny"
    console.log(`Jezdzi samochodem marki ${this.car.brand}. Samochod ma kolor ${this.car.color}.`)
};

two.bind(person)()

function three (color) {
    console.log(`Jezdzi samochodem marki ${this.car.brand}. Samochod ma kolor ${color}.`)
};

three.call(person, 'cukierkowy')

// klasy:

class Food {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    showMeal () {
        console.log(`${this.name} kosztuje ${this.price} zl.`)
    }
}

const wrap = new Food ('Wrap', 8);

wrap.showMeal()

class Cats {
    constructor (name, sex) {
        this.name = name;
        this.sex = sex;
    }

    showCat () {
        console.log(`${this.name} to ${this.sex}.`)
    }
}

const gabrysia = new Cats ('Gaba', 'dziewczynka');
const wiktorek = new Cats ('Wiktor', 'chlopczyk')

gabrysia.showCat()
wiktorek.showCat()

// extends & super:

class Artists {
    constructor (name, country) {
        this.name = name;
        this.country = country;
    }

    introduction () {
        console.log(`${this.name} was from ${this.country}.`)
    }
};

class Painters extends Artists {
    constructor(name, country, style) {
        super(name,country);
        this.style = style;
    }
    isPainter () {
        console.log(`${this.name} was a great painter from ${this.country} and his style was ${this.style}.`)
    }
}

const artist1 = new Artists ('Renoir', 'France');
const painter1 = new Painters ('van Gogh', 'France', 'expressionism');

artist1.introduction()
painter1.isPainter()
painter1.introduction()

class Musicians {
    constructor (name, style) {
        this.name = name;
        this.style = style;
    }

    description () {
        console.log(`${this.name} gra muzyke ${this.style}.`)
    }
}

class PolishMusicians extends Musicians {
    constructor (name, style, country) {
        super(name,style);
        this.country = country;
    }
    description2 () {
        console.log(`${this.name} gra ${this.style} i jest z ${this.country}.`)
    }
}
const musician1 = new Musicians ('Gwen Stefani', 'rock');
const musician2 = new PolishMusicians('Kora', 'rock', 'Poland')

musician1.description()
musician2.description()
musician2.description2()