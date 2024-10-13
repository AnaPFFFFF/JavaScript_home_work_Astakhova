// Тема: Spread
// Напишіть функцію, яка об'єднує два масиви в один, використовуючи оператор Spread, і виводить новий масив.

let firstArr = [25, true, 'Hello', 198,];
let secondtArr = [89, false, 'World', 2,65,];

function spreadArrs (arr1, arr2){
    let newArr = [...arr1, ...arr2];
    return newArr;
}

let result = spreadArrs(firstArr, secondtArr);
console.log(result);

// Тема: Rest
// Створіть функцію, яка приймає перший аргумент як рядок, а решту аргументів зберігає в масиві за допомогою оператора Rest. Функція повинна вивести рядок і масив.

function argSort(firsarg, ...otherarg){
    console.log(`${firsarg}`);
    console.log(otherarg);
}

argSort(259, 'hellow', true, NaN, 13);

// Напишіть функцію, яка приймає будь-яку кількість числових аргументів та обчислює їх середнє значення за допомогою оператора Rest.

function averValueCalc(...num) {
    const total = num.reduce((accumulator, current) => accumulator + current, 0);
    const average = total / num.length;
    return average;
}

console.log(averValueCalc(2,25, 120, 30));
console.log(averValueCalc(19, 64, 2, 100));



// Тема: TypeOf
// Створіть функцію, яка приймає аргумент будь-якого типу та виводить повідомлення про його тип за допомогою оператора typeof.

function typeofInfo (argument){
    let typeInfo = typeof argument;
    return typeInfo;
}

console.log(typeofInfo(false));
console.log(typeofInfo(125));
console.log(typeofInfo('Hellow World'));

// Напишіть функцію, яка перевіряє тип змінної та виводить повідомлення "Це число", "Це рядок" або "Це інший тип", використовуючи оператор typeof.

function typeCheck (value){
    if (typeof value === 'number'){
        console.log("Це число");
    }
    else if (typeof value === 'string'){
        console.log("Це рядок");
    } else {
        console.log("Це інший тип");
    }
}

typeCheck(258);
typeCheck('Hellow');
typeCheck(true);

// Створіть функцію, яка повертає рік народження користувача коли користувач вводить свій вік
// Виведіть результат у консоль.

function getBirthYear (){
    let todayDate = new Date();
    let userAge = prompt("Введіть свій вік:");
    let birthYear = todayDate.getFullYear() - userAge ;
    console.log(`Рік народження: ${birthYear}`);
}

getBirthYear();

// Завдання для Date.toLocaleString:

// Створіть об'єкт Date для поточної дати та часу.
// Використайте метод toLocaleString(), щоб отримати поточну дату та час у зручному для читання форматі.
// Виведіть результат у консоль.

let date = new Date();
console.log(date);
console.log(`${date.toLocaleString()}`);

// Завдання для String.split та toUpperCase:

// Створіть рядок, який містить слова, розділені пробілами.
// Використайте метод split, щоб розбити рядок на масив слів.
// Виведіть отриманий масив у консоль у верхньому регістрі.

let someFruits = 'Apple Banana Pineaple Strawberry';
let fruitsArr = someFruits.split(' ');
console.log(fruitsArr.map(fruit=> fruit.toUpperCase()));

// і ще таких легких по document
// Створіть HTML-сторінку з елементами header, section,  div, задайте елементам атрибути id, сlass.

// Виберіть ці елементи за допомогою 
// getElementById
// getElementsByClassName
// getElementsByTagName

// створіть список ul з 5 елементами li всередині.
// За допомогою querySelector виберіть:
// - перший елемент списку
// - останній елемент списку
// - 3 елемент списку
// За допомогою querySelectorAll
// - всі елементи li в списку
// - конвертуйте вибрані елменти в массив

// Створіть на сторінці елемент який вибирається ціми селекторами
// // let listItems = document.querySelectorAll('ul.nav > li');
// // let listItem = document.querySelectorAll('li:nth-child(2)');