// Використовуючи for in  виведіть значення з обєктку в console.log
const person = {
    name: 'John',
    age: 25,
    occupation: 'Developer'
};

for (const keyname in person) {
    console.log(`${keyname}: ${person[keyname]}`);
}


// Використовуючи for of  та for in  виведіть занчення з обєктів які знаходяться в масиві
const students = [
    { name: 'Alice', age: 20, grade: 'A' },
    { name: 'Bob', age: 22, grade: 'B' },
    { name: 'Charlie', age: 21, grade: 'C' }
];

for (let student of students) {
    for (let key in student) {
        console.log(`${key}: ${student[key]}`);
        }  
};


//  (НЕ ЗРОБИЛА, ЩЕ ПОДУМАЮ) Написати гру "Камінь, ножниці, папір"  дані користувач отримує через prompt а результат гри виводити використовуючи alert (тут треба Math.random та if) 



// Завдання для Math.min та Math.max:
// Створіть функцію, яка приймає два числа як аргументи і повертає менше з них.
function minNumber(number1, number2){
    return Math.min(number1, number2);
}
console.log(minNumber(9, 9.5));

// Створіть функцію, яка приймає два числа як аргументи і повертає більше з них.

function maxNumber(number1, number2){
    return Math.max(number1, number2);
}
console.log(maxNumber(9, 9.5));

// Завдання для Math.pow:
// Створіть функцію, яка підносить число до заданого ступеня.
// Виведіть результат у консоль.

function powValue(number, exp){
    return Math.pow(number, exp);
}
console.log(powValue(5, 5));

// Завдання для Math.floor та Math.ceil:
// Створіть функцію, яка приймає випадкове дробове число та використовує Math.floor для округлення вниз.
function floorNumber(number){
    return Math.floor(number);
}
console.log(floorNumber(2.9684));

// Створіть функцію, яка приймає випадкове дробове число та використовує Math.ceil для округлення вгору.
function ceilNumber(number){
    return Math.ceil(number);
}
console.log(ceilNumber(2.9684));

// По классам
// 1 Створення класу та об'єкта:
// Створіть клас Person з властивостями name та age.

class Person{
    constructor(name, age){
        this._name = name;
        this._age = age;
    }
// 2 Методи класу:
// Розширте клас Person, додайте метод sayHello, який виводить повідомлення з привітанням та ім'ям особи.
    sayHello(){
        console.log(`Hello ${this._name}`);
    }
}

// Створіть об'єкт з цього класу з ім'ям "John" та віком 30.

let person1 = new Person('John', 30);
console.log(person1);

person1.sayHello();

// 3 Наслідування:
// Створіть клас Student, який наслідує від класу Person.
// Додайте властивість studentId до класу Student.
// Додайте метод study, який виводить повідомлення про вивчення студентом.

class Student extends Person{
    constructor(name, age, studentId){
        super(name, age);
        this._studentId = studentId;
    }
    study(){
        console.log(`Student ${this._name} with studentId number ${this._studentId}`);
    }
}

const student1 = new Student('Ana', 28, 'se258');
student1.sayHello();
student1.study();
