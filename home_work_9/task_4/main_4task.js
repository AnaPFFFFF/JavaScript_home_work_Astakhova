// 4) Створіть сторінку та підключіть до неї js
// 4.1) За допомогою js  створіть на сторінці елемент header  та задайте padding 50px та background-color жовтого кольору і властивість text-align center

let bodyConteiner = document.querySelector('body');
let headerEl = document.createElement('header');
headerEl.setAttribute('style','background-color:yellow;padding:50px;text-align:center;');
bodyConteiner.appendChild(headerEl);


//4.2) 
const menuData = [
    { name: 'Головна', url: '/' },
    { name: 'Про нас', url: '/about' },
    { name: 'Послуги', url: '/services' },
    // Додайте ще пункти меню за потреби
];

// Створіть в хедері А теги з значенням з обєкта name  встановленим значенням в href з url.

let navMenu = document.createElement('nav');
headerEl.appendChild(navMenu);

menuData.forEach(menu=>{

    let tagElement = document.createElement('a');

    tagElement.textContent = menu.name;
    tagElement.setAttribute('href', menu.url);

    navMenu.appendChild(tagElement);

})

// 4.3) Додайте тегам А що створені в header  атрибут target з властивістю _blank

let tagElemets = document.getElementsByTagName('a');

for(let i=0; i<tagElemets.length; i++){
    tagElemets[i].setAttribute('target', '_blank');
}

// 4.4)Створіть блок за допомогою js задайте блоку стиль display flex та в середині цього блоку створіть 50 div блоків з правилом border-radius, width 50px height 50px та background-color

let blockContainer = document.createElement('section');
blockContainer.setAttribute('style','display:flex;flex-wrap:wrap;gap:10px');

bodyConteiner.appendChild(blockContainer);

for(let i=0; i<50; i++){
    let divElements = document.createElement('div');
    divElements.setAttribute('style', 'border-radius:25px; width:50px; height:50px; background-color:green');

    blockContainer.appendChild(divElements);
}


// 4.5) доадайте всім стврореним 50 div елементам класс circle-elemt

let circleElements = document.querySelectorAll('section div');

circleElements.forEach(circle=>{
    circle.setAttribute('class', 'circle-elemt');
});
    

// Додаткове завдання: (ДОРОБЛЮ)
// спробуйте зробити  завдання 4.5 так щоб в кожного div елемента був унікальний бекграунд