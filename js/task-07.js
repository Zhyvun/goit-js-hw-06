/*
Напиши скрипт, який реагує на зміну значення input#font-size-control 
(подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. 
В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.
*/

//? type="range" - https://developer.mozilla.org/ru/docs/Web/HTML/Element/input/range

//TODO (G):
const fontRef = document.getElementById("font-size-control");
const textRef = document.getElementById("text");

/*.... при пешому завантаженні сторінки відразу додаємо розмір у наш fontSize, 
а вже потім при настанні події змінюємо*/

textRef.style.fontSize = fontRef.value + "px";

// *-------Варіант 1 ----------

function changeFontRef(event) {
  textRef.style.fontSize = event.currentTarget.value + "px";
}

// *-------Варіант 2 ----------

// const changeFontRef = ({ currentTarget }) =>
//   (textRef.style.fontSize = `${currentTarget.value}px`);

fontRef.addEventListener("input", changeFontRef);

/*
При зміні значення елемента, браузер викликає функцію changeFontRef(), 
яка оновлює розмір тексту елемента span#text (стр. 15), встановлюючи нове значення властивості fontSize.
 Значення event.currentTarget.value є значенням елемента input#font-size-control, 
 а + "px" додає одиницю виміру, щоб задати розмір тексту в пікселях.
 */
