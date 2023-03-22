/*
Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль 
по кліку на button.change-color і виводить значення кольору в span.color.

Для генерування випадкового кольору використовуй функцію getRandomHexColor.
*/

//TODO:

/*
1. Виводим посилання на об'єкти ".color", ".change-color"
2. Шукаємо у власивостях Body де зберігається колір (style → backgroundColor)
3. Створюємо функцію зміни кольору
4. Прописуємо "слухача" на кнопку
*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bgnColor = document.querySelector(".color");
const changeBgnColor = document.querySelector(".change-color");
const body = document.body;

// console.dir(bgnColor);
// console.dir(body);

//*--------Вар 1 ----------
// const changeColor = () => {
//   bgnColor.textContent = getRandomHexColor();
//   body.style.backgroundColor = bgnColor.textContent;
// };

//*--------Вар 2 (трішки скорочений запис)----------
// const changeColor = () => {
//   bgnColor.textContent = body.style.backgroundColor = getRandomHexColor();
// };

// changeBgnColor.addEventListener("click", changeColor);

//*--------Вар 3 (УАПШЕ все в одне злив 🙂)----------

changeBgnColor.addEventListener("click", () => {
  bgnColor.textContent = body.style.backgroundColor = getRandomHexColor();
});
