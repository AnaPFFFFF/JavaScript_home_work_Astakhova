//Переишіть цей код використовуючи let const~
// Замість var
/*for (var i = 0; i < 5; i++) {
    console.log(i);
}*/


for (let i = 0; i < 5; i++) {
    console.log(i);
}

// for (const i = 0; i < 5; i++) {
//     console.log(i);
// }

// Замість var
/*var message = 'test';
function example() {
    if (true) {
        var message = 'Hello, world!';
        console.log(message);
    }
    console.log(message); // Виведе 'Hello, world!'
}*/


// const message = 'test';
// function example(){
//     if(true){
//         const message = 'Hello, world!';
//         console.log(message);
//     }
//     console.log(message);
// }

let message = 'test';
function example(){
    if(true){
        let message = 'Hello, world!';
        console.log(message);
    }
    console.log(message);
}

example();

//======================================

const students = [
    { name: 'Оля', scores: { math: 85, english: 78, science: 92 } },
    { name: 'Іван', scores: { math: 58, english: 74, science: 80 } },
    { name: 'Марія', scores: { math: 95, english: 85, science: 99 } },
    { name: 'Петро', scores: { math: 70, english: 65, science: 75 } },
];

//Створіть функцію яка приймає массив оброблює його map  та повертає новий масив де є імя та середній бал студента

function studentGrades(){
    let newStudArr = students.map(value =>{
        const avrgGrade = (value.scores.math+value.scores.english+value.scores.science)/3;
        return {name: value.name, avrgGrade: avrgGrade};
    });
    return newStudArr;
};

let result = studentGrades();
console.log(result);

//Відфільтруйте студентів за допомогою filter в яких середній бал вище 80 балів

let filterStudents = result.filter((student)=>student.avrgGrade > 80);

console.log(filterStudents);
//========================================

const transactions = [
    { id: 1, type: 'income', amount: 100 },
    { id: 2, type: 'expense', amount: 50 },
    { id: 3, type: 'income', amount: 150 },
    { id: 4, type: 'expense', amount: 70 },
    { id: 5, type: 'income', amount: 200 },
];


//Використайте фільтер для того щоб отримати 2 массива з income та expense  а також за допомогою .

let transIncome = transactions.filter(transaction => transaction.type === 'income');
let transExpense = transactions.filter(transaction => transaction.type === 'expense');

console.log(transIncome);
console.log(transExpense);

//Використайте map щоб зібрати всі дані в окремі масиви про  income та expense.  Та порахуйте сумарне значення для кожного з видів доходу чи роходу

let incomeArr = [];
let expenseArr = [];

transactions.map(transaction => {
    if (transaction.type === 'income') {
        incomeArr.push(transaction.amount);
    } else if (transaction.type === 'expense') {
        expenseArr.push(transaction.amount);
    }
});

const totalIncom = incomeArr.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;
},0);

const totalExpense = expenseArr.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;
},0);

console.log('Total income Info:', totalIncom);
console.log('Total expense Info:', totalExpense);

//Створіть функцію, яка приймає масив чисел, фільтрує ті, що більше 10, і повертає новий масив, що містить перші три елементи результату.

let numberArr = [2, 8, 20, 47, 15, 7, 3, 100, 37];

function filterNumber(){
    let bigNumbers = numberArr.filter(num=> num > 10);
    console.log(bigNumbers);
    let resultNumbers = bigNumbers.slice(0, 3);
    return resultNumbers;
}

let resultNum = filterNumber();
console.log(resultNum);

//Створіть функцію, яка приймає масив і два індекси, і повертає новий масив, що містить елементи між цими індексами, у зворотньому порядку.

function sliceNumbers(arr, index1, index2){
    let newSliceArr = arr.slice(index1, index2);
    return newSliceArr.reverse();
}

let reverseNumberArr = sliceNumbers(numberArr, 2, 7);

console.log(reverseNumberArr);


//Створіть функцію, яка приймає масив чисел, фільтрує парні числа, а потім повертає новий масив, де кожне парне число помножене на 2.

function evenNumbersFilter(arr){
    let evenNumbers = arr.filter((number)=> number % 2 === 0);
    console.log(evenNumbers);
    let doubleNumbers = evenNumbers.map((number)=> number*2);
    return doubleNumbers;
}

let doubleNumbersArr = evenNumbersFilter(numberArr);
console.log(doubleNumbersArr);

//Додаткове завдання (Не зробила, ще подумаю)
const arrayOfArrays = [
    [1, 2, 3],
    [4, 5],
    [6, 7, 8, 9],
    [10]
];


//Використайте map щоб отримати сумму кожно вкладено массиву

//написати функцію на будь-якій мові програмування, яка приймає 4 параметри типу Point { x number; y number } та повертає true, якщо ці точки формують квадрат, інакше - false.
