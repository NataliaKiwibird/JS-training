const item1 = document.querySelector('.item1');
const button = document.querySelector('.arrow');
const icon = document.querySelector('.fas')


const click = () => {
    item1.classList.toggle('hide');

    if (item1.classList.contains('hide')) {
        icon.style.transform = 'rotate(180deg)';
    } else {
        icon.style.transform = 'rotate(0deg)';
    };
};


button.addEventListener('click', click);