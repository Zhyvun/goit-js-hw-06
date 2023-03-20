/*
Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, 
після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, 
скільки вказано в amount і додає їх у div#boxes.

    Розміри найпершого <div> - 30px на 30px.
    Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
    Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію 
    getRandomHexColor для отримання кольору.

Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.    
*/
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//! Поки складно

//TODO:
/*
1. Виводим посилання на об'єкти.
2. Мабуть треба прописати стилі <div>

Створи функцію createBoxes(amount)
Створити функцію очистки destroyBoxes()



*/
const controls = document.getElementById("controls");
const inputNumberEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const divBoxesEl = document.getElementById("boxes");

// console.log(controls);
