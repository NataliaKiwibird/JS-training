// projekt 1:
let score1;
const multiplyButton = document.querySelector('.multiply-button');
const divideButton = document.querySelector('.divide-button');
const span1 = document.querySelector('.original-score');
const span2 = document.querySelector('.new-score')

function addProject1 (x,y) {
    score1 = x + y;
    span1.innerHTML = score1;
}

let multiplyScore;
function multiplyProject1 () {
    multiplyScore = score1 * 2;
    span2.innerText = multiplyScore;
}

let divideScore;
function divideProject1 () {
    divideScore = score1 / 2;
    span2.innerText = divideScore;
}

multiplyButton.addEventListener('click', multiplyProject1);
divideButton.addEventListener('click', divideProject1);

addProject1(6,4)