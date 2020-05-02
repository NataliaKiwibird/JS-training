const multiplyButton = document.querySelector('.one');
const divideButton = document.querySelector('.two');
const originalScore = document.querySelector('.original');
const newScore = document.querySelector('.new');

let score;

function add (a,b) {
    score = a + b;
    originalScore.innerText = score;
};

add(6,6)

let multiplyScore;
const multiply = () => {
    multiplyScore = score * 2;
    newScore.innerText = multiplyScore;
};

multiply()

let divideScore;
const divide = () => {
    divideScore = score / 2;
    newScore.innerText = divideScore;
};

divide()

multiplyButton.addEventListener('click', multiply);
divideButton.addEventListener('click', divide);
