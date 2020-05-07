let $todoInput; // miejsce, gdzie uzytkownik wpsiuje treść zadania
let $alertInfo; // info o braku zadań
let $addBtn; // przycisk ADD - dodawanie nowych elementów listy
let $ulList; // nasza lista zadań, tagi <ul></ul>
let $newTask; // nowo dodane LI, nowe zadanie

let $popup; // pobrany popup
let $popupInfo;; // alert w popupie, gdy doda się pusty tekst
let $editedTodo; // edytowany Todo
let $popupInput // tekst wpisywany w popupie do inputa
let $addPopupBtn // przycisk "zatwierdź" w popupie
let $closeTodoBtn // przycisk do zamykania popupa
let $idNumber = 0;
let $allTasks;
 
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

    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popupInfo');
    $popupInput = document.querySelector('.popupInput');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
    $allTasks = $ulList.getElementsByTagName('li');
};

// nadawanie nasłuchiwania:
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $ulList.addEventListener('click', checkClick);
    $closeTodoBtn.addEventListener('click', closePopup);
    $addPopupBtn.addEventListener('click', changeTodo);
    $todoInput.addEventListener('keyup', enterCheck);
};

function addNewTask () {
    if ($todoinput.value !== '') {
        $idNumber++;
        $newTask = document.createElement('li');
        $newTask.innerText = $todoinput.value;
        $newTask.setAttribute('id', `todo-${$idNumber}`)
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

const enterCheck = () => {
    if (event.keyCode === 13) {
        addNewTask();
    }
};

// przyciski: zrobione/ edytuj/ usuń
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

// zarządzani kliknięciami w przyciski:
const checkClick = (e) => {
    if (e.target.closest('button').classList.contains('complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.closest('button').classList.toggle('completed');
    } else if (e.target.closest('button').className === 'edit') {
        editTask(e);
    } else if (e.target.closest('button').className === 'delete') 
        deleteTask(e);

}; // event = click, event.target = kliknięty element

const editTask = (e) => {
    const oldTodo = e.target.closest('li').id;
    $editedTodo = document.getElementById(oldTodo);
    $popupInput.value = $editedTodo.firstChild.textContent;

    $popup.style.display = "flex";
};

const changeTodo = () => {
    if ($popupInput.value !== '') {
        $editedTodo.firstChild.textContent = $popupInput.value;
        $popup.style.display = 'none';
        $popupInfo.innerText = '';
    } else {
        $popupInfo.innerText = "Podaj treść";
    };
};

// zamykanie popupa
const closePopup = () => {
    $popup.style.display = 'none';
    $popupInfo.innerText = "";
};

// usuwanie zadania:
const deleteTask = (e) => {
    const deleteTodo = e.target.closest('li');
    deleteTodo.remove();

    if ($allTasks.length === 0) {
        $alertInfo.innerText = 'Brak zadań na liście';
    };
};


document.addEventListener('DOMContentLoaded', main);

