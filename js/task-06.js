/*
Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), 
перевіряє його вміст щодо правильної кількості введених символів.

    Яка кількість символів повинна бути в інпуті, 
    зазначається в його атрибуті data-length.
    Якщо введена правильна кількість символів, то border інпуту стає зеленим, 
    якщо неправильна кількість - червоним.

Для додавання стилів використовуй CSS-класи valid і invalid, 
які ми вже додали у вихідні файли завдання.

*/
//TODO (S):

const validSymb = document.getElementById("validation-input");

validSymb.addEventListener("blur", () => {
  const insertSymb = validSymb.value.length;
  const totalSymb = parseInt(validSymb.dataset.length); //? https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/parseInt
  if (insertSymb === totalSymb) {
    validSymb.classList.add("valid");
    validSymb.classList.remove("invalid");
  } else {
    validSymb.classList.add("invalid");
    validSymb.classList.remove("valid");
  }
});

//* by Oleksandr: (рамка не змінює колір)
// const validSymb = document.querySelector("input");

// console.log(validSymb);

// validSymb.addEventListener("blur", lostFocus);

// function lostFocus(event) {
//   const totalSymb = event.currentTarget.value.lenght;
//   if (Number(validSymb.dataset.lenght) !== totalSymb) {
//     validSymb.classList.add("invalid");
//     console.log(totalSymb);
//     return;
//   }
//   validSymb.classList.add("valid");
//   console.log(totalSymb);
// }
