// Zadanie 1:

const ulList = document.createElement('ul');
document.body.appendChild(ulList);

for (i = 1; i < 4; i++) {
    const liItem = document.createElement('li');
    liItem.textContent = i;
    ulList.appendChild(liItem)
};

const lastItem = document.querySelector('li:last-child');
lastItem.textContent = "Ostatni element";

console.log(ulList)


// Zadanie 2:

const showButton = document.querySelector('.show');
const hideButton = document.querySelector('.hide');
const toggleButton = document.querySelector('.both');
const paragraph = document.querySelector('p');

const hideFunction = () => {
    paragraph.classList.add('paragraph__hidden')
};

hideButton.addEventListener('click', hideFunction);

showButton.addEventListener('click', function () {paragraph.classList.remove('paragraph__hidden')});

function toggleFunction() {
    paragraph.classList.toggle('paragraph__hidden')
};

toggleButton.addEventListener('click', toggleFunction)