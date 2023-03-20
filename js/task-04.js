/*
Лічильник складається зі спану і кнопок, 
які по кліку повинні збільшувати і зменшувати його значення на одиницю.

    Створи змінну counterValue, в якій буде зберігатися поточне значення 
    лічильника та ініціалізуй її значенням 0.
    Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй 
    значення лічильника.
    Оновлюй інтерфейс новим значенням змінної counterValue.
*/
//TODO (S):
let counterValue = 0;

const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
const span = document.getElementById("value");
console.dir(span.textContent);
console.log(decrement.dataset.action);
console.log(increment.dataset.action);

decrement.addEventListener("click", numDown);
increment.addEventListener("click", numUp);

function numDown() {
  counterValue -= 1;
  span.textContent = counterValue;
}

function numUp() {
  counterValue += 1;
  span.textContent = counterValue;
}
