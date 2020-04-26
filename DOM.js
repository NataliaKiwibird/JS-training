// API - program/ aplikacja, która komunikuje się z innym programem
// Api wysyła zapytanie do innej aplikacji, a następnie odbiera odpowiedź

// dom - reprezentuje dokument html w przeglądarce
// dom nie jest częścią javascriptu

// Zadanie 1:

const ulList = document.createElement('ul');
document.body.appendChild(ulList);

// const liItem = document.createElement('li');
// ulList.appendChild(liItem).textContent = '1';

for (let s = 1; s < 4; s++) {
    const liItem = document.createElement('li');
    ulList.appendChild(liItem).textContent = s;
};

const lastLi = document.querySelector('li:last-child');
lastLi.innerText = 'Ostatni element'