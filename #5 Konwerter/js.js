const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convertBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const changeBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');
let fahrenheit;
let celsius;

// T(°F) = T(°C) * 1.8 + 32
// T(°C) = (T(°F) - 32) / 1.8

const swap = () => {
    if (one.innerText === '°C') {
    one.innerText = '°F';
    two.innerText = '°C';
    result.innerText = '';
} else {
    one.innerText = '°C';
    two.innerText = '°F';
    result.innerText = '';
}
};

function celToFahr () {
    fahrenheit = converter.value * 1.8 + 32;
    result.innerText = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F.`
    converter.value = '';
};

function fahrToCel () {
    celsius = (converter.value - 32) / 1.8;
    result.innerText = `${converter.value}°F to ${celsius.toFixed(1)}°C.`
    converter.value = '';
};

const reset = () => {
    result.innerText = '';
    converter.value = '';
};


changeBtn.addEventListener('click', swap);
convertBtn.addEventListener('click', function () {
    if (one.innerText === '°C') {
        celToFahr ()
    } else {
        fahrToCel()
    } 
});
resetBtn.addEventListener('click', reset);