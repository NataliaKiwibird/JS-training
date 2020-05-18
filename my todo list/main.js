const input = document.querySelector('.input');
const addBtn = document.querySelector('.add');
const ul = document.querySelector('ul');

addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value !== '') {
        const li = document.createElement('li');
        li.classList.add('list-item');
        li.textContent = input.value;
        ul.prepend(li);
        input.value = '';
    };
});

ul.addEventListener ('click', e => {
    e.target.classList.toggle('done');
});

ul.addEventListener ('dblclick', e => {
    e.target.remove('li');
});