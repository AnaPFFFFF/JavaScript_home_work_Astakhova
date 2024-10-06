/*--------------Створіть функцію wellcomUser, яка приймає масив і функцію-колбек hiUser яка виводить в console ('Вітаю ${user}'), і викликає цю функцію для кожного елемента масиву.*/


function welcomeUser(users, hiUser) {
    for (let i = 0; i < users.length; i++) {
        let user = hiUser(users[i]);
        console.log(`Вітаю ${user}`);
    }
}

function hiUser(name) {
    return name;
}

welcomeUser(['Сергій', 'Людмила', 'Василь', 'Анна'], hiUser);


/*-------------Параметри за замовчуванням:
Створіть функцію, яка приймає параметр зі значенням за замовчуванням і виводить його.*/

/* 1 example
function hellowWorld(firstVal = 'Hellow' , secondVal = 'User'){
    let userGreet = (`${firstVal}, ${secondVal}!`);
    return userGreet;
}
*/

/* 2 example
function hellowWorld(firstVal = 'Hellow' , secondVal = 'User'){
    return `${firstVal}, ${secondVal}!`;
}
*/

// 3 example
const hellowWorld = (firstVal = 'Hellow' , secondVal = 'User') => `${firstVal}, ${secondVal}!`;

console.log(hellowWorld());
console.log(hellowWorld('Привіт', 'Василь'));



/*-----------Перепишіть стрілкову функцію в звичайну 
const multiplyValues = (a, b, c) => a * b * c;*/

function multiplyValues(a, b, c){
    return a * b * c;
}

console.log(multiplyValues(2, 8, 9));



/*------------Створити пустий массив і заповнити його всіма парними 
занченнями від 0 до 8*/

let emptyArr = [];

function fillArr(data){
    for(let i = 0; i <= data; i++){
        if (i != 0 && i % 2 === 0){
            emptyArr.push(i);
        }
    }
}

fillArr(8);

console.log(emptyArr);




/*--------------Створити цикл який виводить значення з масивві  в консоль в такому 
форматі "Сьогодні ....  у вас такі плани .." */

let days = ["Понеділок", "Середа", "Неділя"];
let plans = ["Урок 03", "Урок 04", "Вихідни"];

/* 1 exmpl

if(days.length>0 || plans.length>0){
    for (let index = 0; index < days.length; index++) {
        console.log(`Сьогодні ${days[index]} i у вас такі плани ${plans[index]}`);
    }
}
else{
    console.log(`No data available`);
}*/

/* 2 exmpl
let index = 0;
while (index < days.length || index < plans.length) {
    let userDay = days[index];
    let userPlan = plans[index];
    
    console.log(`Сьогодні ${userDay} i у вас такі плани ${userPlan}`);
    index++;
}*/

// 3 exmpl

function userPlans(day, plan){
    console.log(`Сьогодні ${day} i у вас такі плани ${plan}`);
}

function sortData(days, plans, callback){
    for (let index = 0; index < days.length || index < plans.length; index++){
        let day = days[index];
        let plan = plans[index];
        callback(day, plan)
    }
}

if(days.length>0 || plans.length>0){
    sortData(days, plans, userPlans);
}
else{
    console.log(`No data available`);
}


//-----------Написати цикл який замінює відємне значення в масиві на 0  

let checkArr = [69, 96, -66, 77, 85, -85, 14, -20, 90, -36]

for(let i=0; i<checkArr.length; i++){
    if(checkArr[i] < 0){
        checkArr[i] = 0;
    }
}

console.log(checkArr);

/*Додаткове завадання:
Напишіть функцію summArray яка приймає масив чисел і повертає їхню суму*/

function summArray(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum += number[i]; 
    }
    return sum;
}

let arrExmpl = [1, 2, 3, 4, 5];
console.log(summArray(arrExmpl));



/*Дано масив чисел [1,2,3,4 ]Створіть функцію squareArray яка приймає масив і повертає новий масив, де кожен елемент є квадратом відповідного елемента початкового масиву. */

function squareArray(numbers) {
    let squaredNumbers = []; 
    for (let i = 0; i < numbers.length; i++) {
        squaredNumbers.push(numbers[i] ** 2);
    }
    return squaredNumbers;
}

let arrNumbers = [1, 2, 3, 4];
console.log(squareArray(arrNumbers));
