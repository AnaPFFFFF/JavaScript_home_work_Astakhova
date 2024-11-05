document.addEventListener('DOMContentLoaded', function() {
// Домашня робота:
// 1 Знаходження всіх великих літер в тексті і збереження їх в масив

let textStr = "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque vero laborum fugit harum! Quia, cumque necessitatibus nemo veniam odit dolor impedit aspernatur, ipsa vitae minima quasi doloribus repellendus cupiditate!";

let uppercaseRegEx = /[A-Z]/g;
let upLetters = textStr.match(uppercaseRegEx);
console.log(upLetters);

// 2 Вибір числових значень з строки
let operation = "5 плюс 7 = 3";
let numberRegEx = /\d/g;
let numbers = operation.match(numberRegEx);
console.log(numbers);

// 3  Знаходження слів із певною кількістю символів:
// Напишіть регулярний вираз для знаходження слів у тексті, що складаються рівно з 5 букв, можна взяти текст з textStr з першого завдання

let wordRegEx = /\b\w{5}\b/g;
let fiveLetWords = textStr.match(wordRegEx);
console.log(fiveLetWords);

// 4 Створіть веб-сторінку з текстовим полем і кнопкою. При натисканні на кнопку, збережіть введення користувача у sessionStorage. Додайте ще одну кнопку, яка при натисканні відображатиме збережені дані у веб-сторінці.

let inputField = document.querySelector('.userInput');
let saveButton = document.querySelector('.saveButton');
let showButton = document.querySelector('.displayButton');
let displayText = document.querySelector('.show');

saveButton.addEventListener('click', function() {
    let userInput = inputField.value;
    window.sessionStorage.setItem('savedData', userInput);
    inputField.value = '';
});

showButton.addEventListener('click', function() {
    let savedData = window.sessionStorage.getItem('savedData');
    displayText.innerText = savedData;
});


// 5 Створіть форму з полями email та password  та кнопкою відправити. Та напишіть функції які перевіряють дані на валідність.  Пароль мінімум 8 символів і повинен містити цифрові значення та літери в верхньому регістрі.
// Якщо дані невалідні не заповненні відповідно то кнопка відправити має стан disabled

let emailInput = document.querySelector('#email');
let passwordInput = document.querySelector('#password');
let sendButton = document.querySelector('#submitBtn');
let emailMessage = document.querySelector('.message-email');
let passwordMessage = document.querySelector('.message-password');

let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

function emailValidation() {
    if (emailRegex.test(emailInput.value)) {
        emailMessage.innerText = 'Your email is valid';
        return true;
    } else {
        emailMessage.innerText = 'Your email is invalid';
        return false;
    }
}

function passwordValidation() {
    if (passwordRegex.test(passwordInput.value)) {
        passwordMessage.innerText = 'Your password is valid';
        return true;
    } else {
        passwordMessage.innerText = 'Your password must be at least 8 characters long, contain an uppercase letter and a number';
        return false;
    }
}
    function validateForm() {
        const emailValid = emailValidation();
        const passwordValid = passwordValidation();
        sendButton.disabled = !(emailValid && passwordValid);
    }

    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);


// Додаткова робота:
// - Модифікуйте список задач щоб він  зберігав додані пункти в localstorage і при оновлені сторінки виводив список задач які були додані до цього. Також реалізуйте механізм видалення данних. Щоб дані в локалсторедж синхронізувались  з станом списку задач.
});
