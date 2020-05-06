let $todoinput; // miejsce, gdzie uzytkownik wpsiuje treść zadania
let $alertInfo; // info o braku zadań
let $addBtn; // przycisk ADD - dodawanie nowych elementów listy
let $ulList; // nasza lista zadań, tagi <ul></ul>
let $newTask; // nowo dodane LI, nowe zadanie

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
};

// pobieranie elementów listy:
const prepareDOMElements = () => {
    $todoinput = document.querySelector('.todoInput');
    $alertInfo = document.querySelector('.alertInfo'); 
    $addBtn = document.querySelector('.addBtn'); 
    $ulList = document.querySelector('.todoList ul');
};

// nadawanie nasłuchiwania:
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask)
};

function addNewTask () {
    if ($todoinput.value !== '') {
        $newTask = document.createElement('li');
        $newTask.innerText = $todoinput.value;
        $ulList.appendChild($newTask);
        $todoinput.value = '';
        $alertInfo.innerText = '';
        createToolsArea();
    } else {
        $alertInfo.innerText = 'Wpisz treść zadania!'
    };
};

let $toolsPanel;
let $completeBtn;
let $editBtn;
let $deleteBtn;

function createToolsArea () {
    $toolsPanel = document.createElement('div');
    $toolsPanel.classList.add('tools');
    $newTask.appendChild($toolsPanel);

    $completeBtn = document.createElement('button');
    $completeBtn.classList.add('complete');
    $toolsPanel.appendChild($completeBtn);
    $completeBtn.innerHTML = '<i class="fas fa-check"></i>';


    $editBtn = document.createElement('button');
    $editBtn.classList.add('edit');
    $toolsPanel.appendChild($editBtn);
    $editBtn.innerHTML = 'EDIT';

    $deleteBtn = document.createElement('button');
    $deleteBtn.classList.add('delete');
    $toolsPanel.appendChild($deleteBtn);
    $deleteBtn.innerHTML = '<i class="fas fa-times"></i>';


};

document.addEventListener('DOMContentLoaded', main);

