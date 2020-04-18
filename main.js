// alert("Hej!")

var name = "Ada";
var age = 18;
let Age;
console.log(age)
Age = "18";
console.log(Age)
console.log(Age.length)
console.log(age.length)
let year = 2020;
year = 2021;
console.log(year)
console.log(year.length)
const flat = 2;
console.log(flat)
year = 2020;
console.log(year)

let adres = "Bentley Road";
console.log(adres)
const Adres = "Pod Grodziskiem";
console.log(Adres)

console.log(Adres.length)
console.log(adres.length)

// template string (nazywany "super string")
console.log("Cześć, jestem " + name + " i mam " + age + " lat.")
console.log(`Cześć, jestem ${name} i mam ${age} lat.`)
// ` ` ${variable} jest skrótem do zapisywania template stringa aka super stringa

let kot = "Wiktor";
let kicia = "Gaba";
console.log(`Mam dwa koty: rudy to ${kot}, a czarna to ${kicia}.`)

console.log(`Od urodzenia mieszkałam na ulicy ${Adres}, a teraz mieszkam na ${adres}`)

// po errorze konsola nie wyswietla dalszego kodu

// Przed nazwą zmiennej globalnej warto dodawać znak $. To praktyka stosowana przez developerów 
// dla odrózniania zmiennych lokalnych i globalnych. $nameOfGlobalVariable

 // Zmienne nazywamy po angielsku
// Wielkość liter ma znaczenie
// Nazwy zmiennych zaczynamy małą literą
// Zmiennych nie zaczynamy od cyfr
// Dłusze zmienne nazywamy za pomocą notacjiWielbłądziej
// Zmienne nie mogą zawierać zadnych . Moemy dodać _
// Do deklaracji zmiennej nie mozemy uzyc zarezerwowanego

// róznica między var i let:
// var name = "Ada";
// var name = "Mark";
// console.log(name)
// Mark

// let name = "Ada";
// let name = "Mark";
// console.log(name)
// Error! 

//Metody stringów i numerów (MDN)
let myName = "natalia"
let myNameFixed = myName.charAt(0).toUpperCase() + myName.slice(1);
console.log(myNameFixed)
console.log(myName.includes("N"))
console.log(myName.includes("n"))

console.log(myName.repeat(2))
console.log(myNameFixed.repeat(4))

const lastName = "Bubiak"
const fullName = myNameFixed.concat(" ",lastName);
console.log(fullName)

console.log(year)
console.log(typeof(year))
console.log(typeof(fullName))

const num = 123.456
console.log(num.toFixed())
console.log(num.toFixed(2))
console.log(num.toFixed(1))