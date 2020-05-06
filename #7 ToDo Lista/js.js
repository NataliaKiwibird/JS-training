let $toDoinput; // miejsce, gdzie uzytkownik wpsiuje treść zadania
let alertInfo; // info o braku zadań
let addBtn; // przycisk ADD - dodawanie nowych elementów listy
let ulList; // nasza lista zadań, tagi <ul></ul>

const main = () => {
    prepareDomElements();
    prepareDomEvents();
};

// pobieranie elementów listy:
const prepareDomElements = () => {
    $toDoinput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('.alertInfo'); 
    $addBtn = document.querySelector('.addBtn'); 
    $ulList = document.querySelector('.ulList'); 
};

// nadawanie nasłuchiwania:
const prepareDomEvents = () => {
    
};

document.addEventListener('DOMContentLoaded', main);

