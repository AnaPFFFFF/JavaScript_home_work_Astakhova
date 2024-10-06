//1)Використовуючи prompt, запросіть у користувача введення числа.
//Перевірте, чи введене число парне чи непарне.
//Виведіть результат з використанням console.log.

let yourNumber = prompt('Введіть будь яке число');

    if (yourNumber % 2 === 0){
        console.log(`Ваше число парне ${yourNumber} % 2 = ${yourNumber % 2}`);
    }
    else{
    console.log(`Ваше число непарне ${yourNumber} % 2 = ${yourNumber % 2}`)
    };

//2)Використовуючи prompt, запитайте у користувача його вік.
//Перевірте, чи вік менше 18 років.
//Виведіть відповідне повідомлення про те, чи може користувач використовувати певний ресурс.*/

let userAge = prompt('Введіть ваш вік');

if (userAge < 18){
    alert(`Ваш вік ${userAge} меньше 18, мі не можемо надаті вам доступ!`)
}
else{
    alert(`Привіт!`)
};

//3) Розрахунок повної  вартості товарів :

/*Створіть змінну ціна та кількість товару і присвойте їм значення використовуючи prompt .
Використовуйте математичні операції для обчислення вартості товару (ціна * кількість).
Виведіть результат за допомогою console.log.*/

let priceProduct = prompt('Веедіть ціну товару');
let quantProduct = prompt('Введіть кількість продуктів');

console.log(`Повна вартість ${priceProduct * quantProduct} грн`);

/*4) Розрахунок знижки на товар :
Використовуючи prompt, запросіть в користувача вартість товару.
Розрахуйте знижку на товар у розмірі 50% від введеної вартості.
Виведіть результат знижки за допомогою alert.*/

let productPrice = prompt('Веедіть ціну товару');
let productDiscount = 0.5;

alert(`Ціна зі знижкою 50% буде ${productPrice * productDiscount} грн`);

/*5) Запитайте у користувача ввести три числа (ввести через prompt)
Виведіть у консоль повідомлення про те, яке з введених чисел є найбільшим.*/

let firstNumber = prompt('Введіть перше число');
let secondNumber = prompt('Введіть друге число');
let thirdNumber = prompt('Введіть третє число');

    if(firstNumber > secondNumber && firstNumber > thirdNumber){
        console.log(`${firstNumber} найбільше число`)
    }
    else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
        console.log(`${secondNumber} найбільше число`)
    } else {
        console.log(`${thirdNumber} найбільше число`)
    };

/*6) Визначення сезону:

Запитайте у користувача ввести номер місяця (від 1 до 12).
Виведіть у консоль повідомлення про те, якому сезону належить введений місяць.*/

let monthNumber = prompt('Введіть номер місяцю від 1 до 12');

switch(parseInt(monthNumber)){
    case 1:
    case 2:
    case 12:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Літо');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осінь');
        break;
    default:
        console.log('Неправильний номер місяця')
};

/*7)
Визначення розміру числа:

Запитайте у користувача ввести число.
Виведіть у консоль повідомлення про те, чи введене число є додатнім, від'ємним чи нулем.*/

let userNumber = parseFloat(prompt('Введіть число від - до +'));

    if (userNumber < 0) {
        console.log('Ваше число від\'ємнимє')
    }
    else if (userNumber === 0 && userNumber === undefined) {
        console.log('Ваше число є нулем')
    }
    else {
        console.log('Ваше число додатнє');
    };

/*8)Визначення типу геометричної фігури за допомогою switch:
Створіть код, який приймає назву геометричної фігури ("коло", "квадрат", "трикутник") і використовуючи switch оператор, виводить повідомлення про кількість сторін цієї фігури (наприклад, "Коло має 0 сторін", "Квадрат має 4 сторони").*/

let geometricShape = prompt('Введіть назву геометричної фігури ("коло", "квадрат", "трикутник")').toLowerCase();

switch(geometricShape){
    case "коло":
        alert(`${geometricShape} має 0 сторін`);
        break;
    case "квадрат":
        alert(`${geometricShape} має 4 сторони`);
        break;
    case "трикутник":
        alert(`${geometricShape} має 3 сторони`);
        break;
    default:
        alert('Ви ввели нерпвильну фігуру')
};

/*9)Підрахунок суми парних чисел:
Створіть код, який використовує цикл while для знаходження суми всіх парних чисел в заданому діапазоні (наприклад, від 1 до 20).*/

let number = 1;
let sum = 0;

while (number <= 20) {
    if (number % 2 === 0) { 
        sum += number;
    }
    number++;
}
console.log(`Сума парних чисел від 1 до 20: ${sum}`);

/*10)Зворотний лічильник:
Використовуючи цикл for, напишіть програму, яка виводить числа від 10 до 1 в зворотньому порядку.*/

for (let c = 10; c >= 1; c--){
    console.log(c);
}


5
/*Додадткаові задачі
1)Перевірка величини кута:

Запитайте у користувача ввести величину кута в градусах.
Виведіть у консоль повідомлення про те, чи є величина кута гострою чи тупою ( це більше і менеше 90 градусів відповідно), використовуючи тернарний оператор.*/

let circleUser = prompt('Введіть величину кута в градуса');
let circleSize = (circleUser >= 90) ? "Величина кута гостра" : "Величина кута тупа";

console.log(circleSize);

/*2)Знаходження першого парного числа:
Напишіть програму, яка використовує цикл for для перебору чисел від 1 до 10 і виводить перше знайдене парне число. Використайте оператор break, щоб припинити виконання циклу, якщо парне число знайдено.*/

let i = 1;

for (i = 1; i <= 10; i++){
    if (i%2 == 0){
        break;
    }
}
console.log(i);

/*3) створити switch  в якому є назви планет сонячної системи. Якщо користувач вводить назву планети сонячної системи то виводити ця планета в сонячній системі. Якщо такої планети нема то виводити: такої планети нема в сонячній системі*/

let planet = prompt('Введіть назву планеті сонячної системи').toLowerCase();

switch(planet){
    case 'меркурій':
        alert('Меркурій');
        break;
    case 'венера':
        alert('Венера');
        break;
    case 'земля':
        alert('Земля');
        break;
    case 'марс':
        alert('Марс');
        break;
    case 'юпітер':
        alert('Юпітер');
        break;
    case 'сатурн':
        alert('Сатурн');
        break;
    case 'нептун':
        alert('Нептун');
        break;
    default:
        alert('Tакої планети немає в сонячній системі');
}





































































































































































































































































































































































































































































































































































































































































































































































































