const bigger = document.querySelector('.sizeUp');
const smaller = document.querySelector('.sizeDown');
const textColor = document.querySelector('.color');
const text = document.querySelector('p');
let font = 36;

const sizeUp = () => {
    font += 5;
    text.style.fontSize = font + 'px';
};

const sizeDown = () => {
    font -= 5;
    text.style.fontSize = font + 'px';
};

function changeColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    text.style.color = `rgb(${r},${g},${b})`
};

bigger.addEventListener('click', sizeUp);
smaller.addEventListener('click', sizeDown);
textColor.addEventListener('click', changeColor);
