
//push:
//Завдання 1: Створіть порожній масив та використайте метод push, щоб додати до нього кілька елементів (наприклад, чисел чи рядків).
//Завдання 2: Створіть функцію, яка приймає масив і елемент, і використовує push для додавання цього елемента до масиву.

let someArr = [];
someArr.push (4, 'Nik', true, false, 22.6, 'some info');
console.log(someArr);



function addElementArr(arr, ...element){
    arr.push(...element);
    return arr;
}

addElementArr(someArr, 15, 'Hello World');

console.log(someArr);

//pop:
//Завдання 1: Створіть масив і використайте метод pop, щоб видалити останній елемент з масиву.
//Завдання 2: Напишіть функцію, яка приймає масив і використовує pop для видалення останнього елемента масиву.

let secondArr = [1, 5, 'text', true];
secondArr.pop();

console.log(secondArr);


function deliteElement(arr){
    arr.pop();
    return arr;
}

console.log(deliteElement(secondArr));

//unshift:
//Завдання 1: Створіть масив і використайте метод unshift, щоб додати елементи в початок масиву.
//Завдання 2: Напишіть функцію, яка приймає масив і елемент, і використовує unshift для додавання цього елемента в початок масиву.

let thirdArr = [1, 2, 3, 4, 5];
thirdArr.unshift(0);

console.log(thirdArr);

function addFirstElemenr(arr, ...element){
    return arr.unshift(...element);
}

console.log(addFirstElemenr(thirdArr));


//shift:
//Завдання 1: Створіть масив і використайте метод shift, щоб видалити перший елемент з масиву.
//Завдання 2: Напишіть функцію, яка приймає масив і використовує shift для видалення першого елемента масиву.

let fourthArr = [5, 4, 3, 2, 1];
fourthArr.shift();

console.log(fourthArr);

function delFirstElement(arr){
    return arr.shift();

}

console.log(delFirstElement(fourthArr));

//fill:
//Завдання 1: Створіть масив певного розміру і використайте метод fill, щоб заповнити його певним значенням.
//Завдання 2: Напишіть функцію, яка приймає масив, значення та індекси, і використовує fill для заповнення масиву зазначеними значеннями на зазначених позиціях.

let fifthArr = new Array(8);
fifthArr.fill('some text');

console.log(fifthArr);

function fillArr(arr, element, index = 0){
    arr.fill(element, index);
    return arr;
}

fillArr(fifthArr, 'hellow', 5);

console.log(fifthArr);

//reverse:
//Завдання 1: Створіть масив і використайте метод reverse, щоб перевернути змінений порядок його елементів.
//Завдання 2: Напишіть функцію, яка приймає масив і використовує reverse для зміни порядку його елементів.

let sixthArr = ['a', 'b', 'c', 'd', 'e'];
sixthArr.reverse();

console.log(sixthArr);

function reverseArr(arr){
    return arr.reverse();
}

console.log(reverseArr(sixthArr));


//Завдання з обєктами
//Створіть функцію, яка приймає число і повертає масив об'єктів. Кожен об'єкт має містити два поля: число і його квадрат. Масив повинен містити об'єкти для чисел від 1 до цьго чила . Наприклад
// [
//   { number: 1, square: 1 },
//   { number: 2, square: 4 },
//   { number: 3, square: 9 },
//   { number: 4, square: 16 },
//   { number: 5, square: 25 }
// ]

let sqrArr = new Array();

function getArr(number){
    return sqrArr.push({number: number, square: number**2});
}

console.log(getArr(2));
console.log(getArr(3));
console.log(getArr(4));
console.log(getArr(5));
console.log(getArr(6));

//Створіть функцію, яка приймає два масиви: масив імен та масив віків. Функція повинна повернути масив об'єктів, де кожен об'єкт представляє користувача з ім'ям і віком.

let names = ['Оля', 'Іван', 'Марія'];
let ages = [25, 30, 22];

let userData = [];

function newUsers(name, age){
    userData.push({name:name, age:age});
}

function sortData(names, ages, callback){
    let length = (names.length < ages.length) ? names.length : ages.length;
    for (let i=0; i<length; i++){
        callback(names[i],ages[i]);
    }
}

sortData(names, ages, newUsers);

console.log(userData);


//Дано масив чисел видаліть найбільший елемент з масиву

let numArr = [1, 4, 18, 3, 25]; 
let maxNumber = numArr[0];
for(let i=0; i>numArr; i++){
    if(numArr[i] > maxNumber){
        numArr.shift(maxNumber);
    };
}

console.log(numArr);


//Напишіть функцію, яка приймає масив чисел, сортує його за спаданням, потім замінює перші три елементи масиву значенням 10

let secondNumArr = [2, 18, 69, 7, 15, 200, 37];

function sortArr(arr){
    arr.sort((a,b)=>b-a);
    for (let i = 0; i < 3; i++) {
        arr[i] = 10;
    }
    return arr;
}

console.log(sortArr(secondNumArr));


//Додаткові задачі

//Напишіть функцію, яка приймає масив чисел, видаляє всі повторювані елементи, сортує залишки за спаданням і видаляє найбільший елемент.

function newNumArr(arr) {
    let uniqueArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (uniqueArr.indexOf(arr[i]) === -1) {
            uniqueArr.push(arr[i]);
        }
    }
    uniqueArr.sort((a, b) => b - a);
    uniqueArr.shift();
    return uniqueArr;
}

let newSortArr = [1, 4, 18, 3, 25, 18, 4, 25];
console.log(newNumArr(newSortArr));


//Напишіть функцію, яка приймає два масиви чисел, об'єднує їх, сортує у порядку зростання і видаляє останні 4 елементи.

let aNumArr = [2, 54, 34, 1.25, 150];
let bNumArr = [17, 4, 26, 8.25, 347];

function sortNumArr(arr1, arr2){
    let sumArr = arr1.concat(arr2);
    sumArr.sort((a,b)=>a-b);
    let resultArr = [];
    for (let i = 0; i < sumArr.length - 4; i++) {
        resultArr.push(sumArr[i]);
    }
    return resultArr;
}

console.log(sortNumArr(aNumArr, bNumArr));

//У вас є масив об'єктів, які представляють користувачів. Кожен користувач має ім'я та вік. Напишіть функцію, яка відфільтрує користувачів старших за 18 років, відсортує їх за віком у порядку зростання і видалить наймолодшого.
let users = [
    { name: 'Оля', age: 17 },
    { name: 'Іван', age: 25 },
    { name: 'Петро', age: 19 },
    { name: 'Марія', age: 30 },
];

function userSort(users){
    let olderUsers = [];
    for(let i=0; i<users.length; i++){
        if (users[i].age>18){
            olderUsers.push(users[i]);
        }
    }
    olderUsers.sort((a,b)=>a.age-b.age);
    olderUsers.shift();
    return olderUsers;
}

console.log(userSort(users));