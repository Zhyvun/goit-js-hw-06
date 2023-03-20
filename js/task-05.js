/*
Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
підставляє його поточне значення в span#name-output. 
Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

*/

//TODO (S):
const insert = document.getElementById("name-input");
const result = document.getElementById("name-output");

// console.log(insert);
// console.log(result);

//* -------- Вар 1 ---------

// insert.addEventListener("input", newInput);
// function newInput(event) {
//   return (result.textContent = event.currentTarget.value)
//     ? null
//     : (result.textContent = "Anonymous");
// }

//* -------- Вар 2 (з урахуванням методу  - trim() видаляє пробіли та символи з початку та кінця строки) ---------
//! -------- Але не зрозумів нахіба ? --------

insert.addEventListener("input", newInput);
function newInput(event) {
  return (result.textContent = event.currentTarget.value)
    ? event.currentTarget.value.trim() !== ""
    : (result.textContent = "Anonymous");
}

// dy Vira:
// const refs = {
//   input: document.querySelector('[id="name-input"]'),
//   output: document.querySelector('[id="name-output"]'),
//   spanEl: document.querySelector("span"),
// };
// refs.input.addEventListener("input", onInputChange);
// function onInputChange(event) {
//   if (event.currentTarget.value.trim() !== "") {
//     refs.output.textContent = event.currentTarget.value;
//   }
// }
