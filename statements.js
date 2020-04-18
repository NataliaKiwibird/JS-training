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