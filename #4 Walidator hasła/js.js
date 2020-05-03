const password = document.querySelector('#password');
const info = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;


function checkPassword () {
    if (password.value.length > minValue && password.value.match(letters) && password.value.match(numbers) && password.value.match(special)) {
        info.innerHTML = 'Masz bardzo dobre hasło';
        info.style.color = 'lime';
    } else if (password.value.length > minValue && password.value.match(letters) && password.value.match(numbers)) {
        info.innerHTML = 'Masz dobre hasło';
        info.style.color = 'gold';
    } else {
        info.innerHTML = 'Masz za słabe hasło';
        info.style.color = 'tomato';
    };
};

password.addEventListener('keyup', function () {
    if (password.value !== '') {
        checkPassword()
    } else {
        info.innerHTML = 'Nie podałeś hasła...';
        info.style.color = 'grey';
    }
})

// element.value() <--- pobiera wartość danego elementu. Wartość przechowywana przez element



// const checkPassword = () => {
// if (password.value.length > minValue && password.value.match(letters) && password.value.match(numbers) && password.value.match(special)) {
//     info.innerHTML = 'Masz bardzo dobre hasło';
//     info.style.color = 'lime';
// } else if (password.value.length > minValue && password.value.match(letters) && password.value.match(numbers)) {
//     info.innerHTML = 'Masz dobre hasło';
//     info.style.color = 'gold';
// } else { 
//     info.innerHTML = 'Masz za słabe hasło';
//     info.style.color = 'tomato';
// }
// };


// password.addEventListener('keyup', function () {
//     if (password.value !== '') {
//         checkPassword();
//     } else {
//         info.innerHTML = 'Nie podałeś hasła...';
//         info.style.color = 'rgb(172, 169, 169)';
//     }
// });