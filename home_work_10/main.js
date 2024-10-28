// Домашня робота:
// 1. onclick
// Задача: Створіть кнопку та елемент Р з текстом,при кліку на кнопку текст змінює колір. Можете використати функцію яка генерує різний колір

function getRandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`;
}

function clickChangeColor(){
    const colorText = document.querySelector('.color');
    colorText.style.color = getRandomColor();
}

// 2. ondblclick
// Задача: Створіть елемент, який при подвійному кліку збільшує свій розмір в 2 рази ( змінюємо width i height).

function clickChangeSize(){
    const changeSizeElem = document.querySelector('.square');

    const currentWidth = changeSizeElem.offsetWidth;
    const currentHeight = changeSizeElem.offsetHeight;

    changeSizeElem.style.width = `${currentWidth*2}px`;
    changeSizeElem.style.height = `${currentHeight*2}px`;
}

// 3. addEventListener і removeEventListener

// Створити кнопку і текстовий елемент в якому розмість лічільник: 0,при кліку на кнопку в текстовому значенні повино збільшуватись значення на 1. Коли значення лічильника перевищує 10, кнопка перестає реагувати на кліки.

let count = 0;

function clockCounter(){
    const counterNumber = document.querySelector('.number');
    count ++;
    counterNumber.textContent = `Ви клікнули ${count} разів`;

    if(count>=10){
        countButton.removeEventListener('click', clockCounter);
    }
}

let countButton = document.querySelector('.count');
countButton.addEventListener('click', clockCounter);

// 4. Створіть веб-сторінку з кнопкою та 10 елементами (наприклад, div). Підключіть обробник події onclick до кожного елементу. Коли користувач натисне на елемент,цей елемент має бути видалений зі сторінки

let elementCointeiner = document.querySelector('.task-4');

for(let i=0; i<10; i++){
    let divElement = document.createElement('div');
    divElement.style.backgroundColor = getRandomColor();
    divElement.classList.add('circle');
    elementCointeiner.appendChild(divElement);
}

const divElements = document.querySelectorAll('.circle');

divElements.forEach(item => {
    item.addEventListener('click', function(){
        item.remove();
    })
});

// 5.event.target   
// Створіть блок з классом blockContainer з 3 кнопками,  в кожної з яких унікальний клас button.first, button.second, button.third.

let sectionForButt = document.querySelector('.eve-targ');

let buttonConteiner = document.createElement('div');
buttonConteiner.classList.add('blockContainer');

sectionForButt.appendChild(buttonConteiner);
const classes = ['button.first', 'button.second', 'button.third'];

for(let i=0; i<3; i++){
    let buttonEve = document.createElement('button');
    buttonEve.classList.add((classes[i]));
    buttonEve.textContent = `Button ${i+1}`;

    buttonConteiner.appendChild(buttonEve);
}

// Додайте обробник кліка на blockContainer і при кліку на кнопку виводьте alert в якому повідомляйте яка кнопка отримала клік

let buttonEv = document.querySelector('.blockContainer');

// buttonEv.addEventListener('click',(event)=>
//     alert(`Вы нажали на ${event.target.textContent}`));

buttonEv.onclick = function(event){
    alert(`Вы нажали на ${event.target.textContent}`);
}

// 6. onclick + робота з css
// створіть кнопку та список з лінками.Кнопка має текст "Відкрити меню". І по кліку на кнопку відкриває меню яке заховане за допомгою css та змінює текст в середині на "Закрити меню"

let navMenu = document.querySelector('.nav-links');
let buttonMenu = document.querySelector('.menu-actions');

buttonMenu.onclick = function(){
    navMenu.classList.toggle('hidden');
    
    if(navMenu.classList.contains('hidden')){
        buttonMenu.textContent='Відкрити меню';
    }
    else{
        buttonMenu.textContent='Закрити меню';
    }
};


// Додаткова задача:
// зробіть на сторінці нетфлікс можливість при кліку на зірку встановити новий рейтинг. Клік по першій зірці рейтинг 1 клік по останній рейтинг 5 і всі 5 зірок жовті