// Домашня робота:

//     <table>
//         <thead>
//             <tr>
//                 <th>
//                     title
//                 </th>
//                 <th>
//                     year
//                 </th>   
//                 <th>
//                     rating
//                 </th>                   
//             </tr>
//         </thead>

//     </table>
// 2) пройдіть по масиву і зробіть заповнення таблиці даними з масива
const booksArray = [
    {
        title: 'Пригоди Аліси в Країні Див',
        year: 1865,
        rating: 4.5
    },
    {
        title: '1984',
        year: 1949,
        rating: 4.8
    },
    {
        title: 'Гаррі Поттер і філософський камінь',
        year: 1997,
        rating: 4.7
    }
];

let bookTable = document.querySelector('table');
let tbodyEl = document.createElement('tbody');
bookTable.appendChild(tbodyEl);


booksArray.forEach(book=>{
    let row = document.createElement('tr');

    let titleInfo = document.createElement('td');
    let yearInfo = document.createElement('td');
    let ratingInfo = document.createElement('td');

    titleInfo.textContent = book.title;
    yearInfo.textContent = book.year;
    ratingInfo.textContent = book.rating;

    row.appendChild(titleInfo);
    row.appendChild(yearInfo);
    row.appendChild(ratingInfo);

    tbodyEl.appendChild(row);
})



//  3)   Створіть HTML-сторінку з контейнером, в який будуть додаватися елементи за допомогою JavaScript.
    const elementsArray = [
    { tag: 'p', text: 'Елемент 1' },
    { tag: 'div', text: 'Елемент 2' },
    { tag: 'span', text: 'Елемент 3' }
];
// Створіть функцію, яка приймає об'єкт і створює новий елемент з використанням document.createElement, встановлює текст елемента та повертає його в контейнер.

function creatNewElement (arr){
    let newElement = document.createElement(arr.tag);
    newElement.textContent= arr.text;
    return newElement;
}

// Пройдіть циклом по масив і для кожного обєкту застосуйте створену функцію

let newConteiner = document.querySelector('.elements-container');

elementsArray.forEach(data => {
    let newElement = creatNewElement(data);
    newConteiner.appendChild(newElement);
});


// Додаткове завдання: (ДОРОБЛЮ!!! НЕВСТИГАЮ )

// - Виведіть на сторінці нетфікс рейтинг за допомогою js
// - Виведіть жанри за допомогою js
// - Спробуйте створити картинки слайдера та створити їх за допмогою js
