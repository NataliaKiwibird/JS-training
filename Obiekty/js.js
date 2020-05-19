const myFamily = {
    mama: 'Magda',
    tata: 'Andrzej',
    bracia: {
        starszy: 'Bartek',
        młodszy: 'Paweł'
    },
    partner: 'Damian',
    koty: {
        chłopczyk: 'Wiktor',
        dziewczynka: 'Gabrysia',
        sound () {
            console.log('miau, miau');
        }
    }
};

myFamily.koty.sound()

console.log(`Moja mama ma na imię ${myFamily.mama}, moi bracia to ${myFamily.bracia.starszy} i ${myFamily.bracia.młodszy}, a mój rudy kotek ma na imię ${myFamily.koty.chłopczyk}.`)

const myData = {
    name: 'Natalia',
    DOB: '13 September',
    town: {
        current: 'Liverpool',
        previous: 'Bielsko-Biała'
    },
    'fav-sport': 'bike'
};

console.log(`Jestem ${myData.name}, mieszkam w ${myData.town.current} i mój ulubiony sport to ${myData['fav-sport']}.`)

// dodawanie kluczy do obiektów:
myData['maiden-name'] = 'Bubiak';
myData.address = 'Bentley Road';

// usuwanie kluczy z obiektów:
delete myData.DOB

console.log(myData)

// konstruktor:
// (nazwy konstruktorów zaczynamy od wielkich liter)

function User (name, age) {
    this.name = name;
    this.age = age;
}

// protoyp:
// nazwa konstruktora + prototype + nazwa funkcji

User.prototype.powitanie = function () {
    console.log(`Uzytkownik ma na imię ${this.name} i ma ${this.age} lat.`);
};

// wywoływanie konstruktorów:
const newUser = new User ('Maria', 33);
const newUser2 = new User ('Adam', 25);
const newUser3 = new User ('Maja', 17);

newUser.powitanie()
newUser2.powitanie()
newUser3.powitanie()

// dodawanie czegoś do konstruktora:
User.prototype.country = 'Polska'

const btn1 = document.querySelector('.one');
const btn2 = document.querySelector('.two');
const btn3 = document.querySelector('.three');
const para = document.querySelector('p');

function Food (name, price) {
    this.name = name;
    this.price = price;
};

const pizza = new Food ('Pizza', 20);
const falafel = new Food ('Falafel', 13);
const kebab = new Food ('Kebab', 12);

Food.prototype.sentence = function () {
    para.textContent = `${this.name} kosztuje ${this.price}zł.`
};

btn1.addEventListener ('click', () => {
    pizza.sentence()
});

btn2.addEventListener ('click', () => {
    falafel.sentence()
});

btn3.addEventListener ('click', () => {
    kebab.sentence()
});