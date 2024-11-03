// Створіть форму з декількома радіокнопками, кожна з яких представляє різний колір (наприклад, червоний, зелений, синій).

const [...colorRadioBut] = document.querySelectorAll('input[name="color"]');
let bodyEl = document.querySelector('body');
let butReset = document.querySelector('.reset');

const baseColor = '#ffffff';

colorRadioBut.forEach(radioBut =>{
    radioBut.addEventListener('change', function(){
        bodyEl.style.backgroundColor = this.value;
    });
});

butReset.addEventListener('click', function(){
    bodyEl.style.backgroundColor = baseColor;
});

// Використовуйте подію onchange для кожної радіокнопки, щоб змінювати колір фону сторінки відповідно до вибору користувача.

// colorRadioBut.forEach(radioBut =>{
//     radioBut.onchange = function(){
//         bodyEl.style.backgroundColor = this.value;
//     };
// });

// butReset.onclick = function(){
//         bodyEl.style.backgroundColor = baseColor;
// };

// Створіть випадаючий список з назвами країн.
// Використовуйте подію onchange для випадаючого списку, щоб виводити інформацію про вибрану країну, таку як столиця або населення, в іншому елементі на сторінці.

const cityInfo = [
    {
        name: "Київ",
        population: "близько 2.9 мільйонів",
        description: "Столиця України, культурний та політичний центр з багатою історією, відомий своїми архітектурними пам'ятками, такими як Києво-Печерська Лавра та Софійський собор."
    },
    {
        name: "Харків",
        population: "близько 1.4 мільйона",
        description: "Друге за величиною місто України, важливий науковий та промисловий центр, відомий своїми університетами, науковими інститутами та парками."
    },
    {
        name: "Одеса",
        population: "близько 1 мільйона",
        description: "Портове місто на Чорному морі, культурний центр із численними музеями та театрами, відоме своєю архітектурою, гумором та мальовничими пляжами."
    },
    {
        name: "Львів",
        population: "близько 720 тисяч",
        description: "Історичне місто на заході України, відоме своїм архітектурним різноманіттям, кафе-культурою та фестивалями, а також включене до списку світової спадщини ЮНЕСКО."
    }
];


let citySelect = document.querySelector('#cities');
let infoCity = document.querySelector('.city-info');

citySelect.addEventListener('change', function() {

    let selectedCityName = citySelect.options[citySelect.selectedIndex].text;
    
    let selectedCityInfo = cityInfo.find(city => city.name === selectedCityName);

    if (selectedCityInfo) {
        infoCity.innerHTML = `
            <h3>${selectedCityInfo.name}</h3>
            <p><strong>Населення:</strong> ${selectedCityInfo.population}</p>
            <p><strong>Опис:</strong> ${selectedCityInfo.description}</p>
        `;
    } else {
        infoCity.innerHTML = '';
    }
});


// створіть кнопку яка при натисканні запускає таймер, який виводить збільшення лічильника кожну секунду. Коли лічильник досягне 10, автоматично зупиніть таймер.

let startButton = document.querySelector('.start');
let counterBox = document.querySelector('.counter');
let count = 0;
let intervalCounter;

function countFn() {
    count++;
    counterBox.textContent = count;
    if (count >= 10) {
        clearInterval(intervalCounter);
    }
}

startButton.addEventListener('click', () => {
    count = 0;
    counterBox.textContent = count;
    clearInterval(intervalCounter);
    intervalCounter = setInterval(countFn, 1000);
});