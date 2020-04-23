// IF, ELSE, ELSE IF
// IF () {}
// IF () {} ELSE {}

let password = "abcd01&*29384";
let color = "blue";

if (color = "blue" && 10 > 0) {
    console.log("true true")
} else {
    console.log("false false")
}

if (password.length > 12 && password.includes("&" || "*" || "!")) {
console.log("dobre hasło")
} else if (password.length > 10 && password.includes("&")) {
    console.log("srednie hasło")
} else if (password.length > 10) {
    console.log("słabe hasło")
} else {
    console.log("bardzo słabe hasło") 
}

const passLength = 10;

if (password.length > 12 && password.includes("&" || "*" || "!")) {
    console.log("dobre hasło")
    } else if (password.length > passLength && password.includes("&")) {
        console.log("srednie hasło")
    } else if (password.length > passLength) {
        console.log("słabe hasło")
    } else {
        console.log("bardzo słabe hasło") 
    }

    // ZADANIE Z "IF"

    let X = 50;
    let Y = 30;

    if (X >= Y) {
        console.log("X jest większe lub równe Y")
    }

    // ZADANIE IF & ELSE

    let Color = "blue";
    let NewColor = "green";

    if (Color === NewColor) {
        console.log("Kolory się zgadzają")
    } else {
        console.log("Kolory się nie zgadzają")
    };

    // ZADANIE IF, ELSE IF & ELSE

    let c = 100;
    let d = 50;

    if (c > d) {
        console.log("c jest większe od d")
    } else if (c == d) {
        console.log("c jest równe d")
    } else {
        console.log("c jest mniejsze od d")
    }

    // ZADANIE ZE SWITCH:

    let promo = "20%";

    switch (promo) {
        case "10%":
            console.log("Skorzystaj z promocji 10%");
            break;
        case "20%":
            console.log("Skorzystaj z promocji 20%");
            break;
        case "30%":
            console.log("Skorzystaj z promocji 30%");
            break;
        default:
            console.log("Dziś nie ma zadnych promocji");
    }

    // ZADANIE Z OPERATOREM WARUNKOWYM

    let z = 10;

    console.log((z % 2 === 0) ?  "Wyrazenie prawdziwe" : "Wyrazenie fałszywe")

    // inna mozliwosc:
    let check = (z % 2 === 0) ?  "Wyrazenie prawdziwe" : "Wyrazenie fałszywe";

    // ZADANIE TRUDNE, LECZ NIE NUDNE

    let e = 50;

    if (e >= 100) {
        console.log("e jest większe".toUpperCase())
    } else if (e < 100 && e > 30) {
        console.log("e jest średniakiem".toUpperCase())
    } else {
        console.log("e jest małe".toUpperCase())
    }