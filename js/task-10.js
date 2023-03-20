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

//! Поки складно

//TODO:
/*
1. Виводим посилання на необхідні об'єкти (<div>).
2. Прописати початкові стилі <div>
3. Створи функцію createBoxes(amount)
4. Створити функцію очистки destroyBoxes()

*/

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

//1.
const controls = document.getElementById("controls");
const insNumEl = document.querySelector('[type="number"]');
const createBtnEl = document.querySelector("button[data-create]");
const destroyBtnEl = document.querySelector("button[data-destroy]");
const divEl = document.getElementById("boxes");

// console.log(controls);

//2.
divEl.style.display = "flex";
divEl.style.flexWrap = "wrap";
divEl.style.alignItems = "center";
divEl.style.marginTop = "30px";

// Вішаєм слухача на кнопку createBtnEl
createBtnEl.addEventListener("click", () => {
  // console.log(insNumEl.value);

  // Прописуємо умову на корректність введених чисел (перевіряємо зі значеннями min="1" max="100" )
  const insert = insNumEl.value.trim();
  if (
    Number(insert) > Number(insNumEl.max) ||
    Number(insert) < Number(insNumEl.min)
  ) {
    alert(
      "Людино Добра!🙏 Не балуйся, введи числа від 1 до 100 ... бо не лізе 👀"
    );
  } else {
    createBoxes(insert);
  }
  insNumEl.value = "";
});

//3.
function createBoxes(quantity) {
  let size = 30;
  const boxesArr = [];
  for (let i = 0; i < quantity; i += 1) {
    size += 10 * i;
    const div = `<div 
    class="item" style="display: block; 
    margin-right: 10px;
    margin-bottom: 30px;
    background-color: ${getRandomHexColor()}; 
    width: ${size}px; height: ${size}px;">
    </div>`;
    boxesArr.push(div);
  }
  divEl.insertAdjacentHTML("beforeend", boxesArr.join(""));
  // console.log("arr length", boxesArr.length);
}

// Вішаєм слухача на кнопку destroyBtnEl
destroyBtnEl.addEventListener("click", destroyBoxes);

//4.
function destroyBoxes() {
  insNumEl.value = "";
  divEl.innerHTML = "";
}
