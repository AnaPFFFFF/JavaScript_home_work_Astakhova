window.onload = function(){

// Домашня робота:
// Завдання 'onMouseOver' і 'onMouseOut': Створіть область на сторінці (наприклад, div), яка змінює свій фоновий колір, коли користувач наводить на неї курсор миші, та повертає початковий колір, коли курсор покидає цю область.

let hoverEl = document.querySelector('.mouse');
let primaryColor = hoverEl.style.backgroundColor;
let primaryColorBorder = hoverEl.style.border;

hoverEl.onmouseover = function(){
    this.style.backgroundColor = 'pink';
    this.style.border = 'solid 10px blue';
}

hoverEl.onmouseout = function(){
    this.style.backgroundColor = primaryColor;
    this.style.border = primaryColorBorder;
}

// Завдання 'onContextMenu': 
// Створіть елемент текстовий блок, на який при правому кліку миші замість звичайного контекстного меню браузера з'являється власне створене контекстне меню. Це меню може містити опції, як-от "вирівняти по центру", "вирівняти по правому центру", "вирівняти по лівому краю", "Приховати елемент". Складніший варіант зробити щоб при кліку на меню текст в блоці вирівнювався

let textBlock = document.querySelector('.text-info');
let contextMenu = document.querySelector('.dropdown');
let bodyEl = document.querySelector('body');
let linkEl = document.querySelectorAll('.dropdown-menu a');

textBlock.oncontextmenu = function(e){
    e.preventDefault();
    contextMenu.classList.remove('hiden');
    contextMenu.style.left = `${e.pageX}px`;
    contextMenu.style.top = `${e.pageY}px`;
    contextMenu.style.display = 'block';
}

contextMenu.oncontextmenu = function(e) {
    e.preventDefault();
}

linkEl.forEach(link=>{
    link.onclick = function(e){
        e.preventDefault();

        if(this.classList.contains('first-link')){
            textBlock.style.textAlign = 'left';
        }
        else if(this.classList.contains('second-link')){
            textBlock.style.textAlign = 'right';
        }
        else if(this.classList.contains('third-link')){
            textBlock.style.textAlign = 'center';
        }
        else if(this.classList.contains('last-link')){
            textBlock.classList.add('hiden');
        }
    }
});

//не розумию чому працює навпаки, я хочу щоб контекстне меню закрівалось при будь якому кліку за його межі
bodyEl.onclick = function(e) {
    if (contextMenu.contains(e.target) && e.target !== contextMenu) {
        contextMenu.classList.add('hiden');
        contextMenu.style.display = 'none';
    }
};


// Завдання 'keyup': Створіть ігрове поле, де користувач може переміщати об'єкт (наприклад, квадрат або коло) за допомогою клавіш стрілок. Рух об'єкта повинен зупинятися, коли клавіша відпущена

let playSpace = document.querySelector('.playground')
let moveEl = document.querySelector('.move-element');

let position = { x: 0, y: 0 };
let speed = 10;

playSpace.addEventListener('keydown', (e) => {
    e.preventDefault();
    switch (e.key) {
        case 'ArrowUp':
            position.y -= speed;
            break;
        case 'ArrowDown':
            position.y += speed;
            break;
        case 'ArrowLeft':
            position.x -= speed;
            break;
        case 'ArrowRight':
            position.x += speed;
            break;
    }
    updatePosition();
});

function updatePosition() {
    moveEl.style.transform = `translate(${position.x}px, ${position.y}px)`;
}

//не знаю як зробити щоб круг не заходив за межі поля


// Завдання з інпутами
// Конвертер валют
// Мета: Створити простий конвертер валют, який перетворює введені користувачем гроші з однієї валюти в іншу.

// Інструкції:
// Створіть два поля введення: одне для суми, друге для курсу обміну.
// Додайте кнопку, яка виконає конвертацію при її натисканні.
// При натисканні кнопки, зчитайте значення з обох полів і виконайте конвертацію.
// Виведіть результат конвертації на сторінку.

function convertCurrency() {
    let amount = parseFloat(document.querySelector('.amount').value);
    let rate = parseFloat(document.querySelector('.rate').value);
    let convertResult = amount * rate;
    document.querySelector('.result').value = `${convertResult.toFixed(2)}`;
}

document.querySelector('.count').addEventListener('click', convertCurrency);



// Динамічний список задач
// Мета: Створити додаток для управління списком задач, де користувач може додавати та видаляти задачі.

// Інструкції:
// Створіть поле введення для введення назви задачі.
// Додайте кнопку для додавання задачі до списку.
// Кожна додана задача повинна з'являтися на сторінці у вигляді списку.
// Додайте можливість видалення задачі зі списку.

// Получаем элементы
let formEl = document.querySelector('form');
let inputEl = document.querySelector('#taskInput');
let listEl = document.querySelector('#taskList');
let deleteButton = document.querySelector('.delete-task')


function addTask(e) {
    e.preventDefault();
    let taskText = inputEl.value.trim();
    if (taskText === "") return;

    let taskItem = document.createElement('li');
    taskItem.textContent = taskText;

    listEl.appendChild(taskItem);
    inputEl.value = "";
}
deleteButton.addEventListener('click', function() {
    let lastTask = listEl.lastElementChild;
    if (lastTask) {
        lastTask.remove();
    }

});

formEl.addEventListener('submit', addTask);





// Додаткове Завдання 
// 'onMouseDown' і 'onMouseUp': Реалізуйте просту гру "Перетягування": створіть об'єкт, який можна перетягувати в межах певної області, використовуючи події натискання та відпускання кнопки миші.

}