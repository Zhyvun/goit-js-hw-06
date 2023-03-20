/*
HTML містить порожній список ul#ingredients.
Напиши скрипт, який для кожного елемента масиву ingredients:

    Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
    Додасть назву інгредієнта як його текстовий вміст.
    Додасть елементу клас item.
    Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
*/

//TODO:
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//* --------- for .... of -----
//отримуємо об'єкт
const newList = document.getElementById("ingredients");
// //перебор масива
// for (const ingredient of ingredients) {
//   //cтворюємо Li
//   const newEl = document.createElement("li");
//   // console.log(ingredient);
//   // -----------Вар 1 ---------
//   //Додаємо в Li текст (textContent)
//   newEl.textContent = ingredient;
//   //пушим Li→Ul
//   newList.appendChild(newEl);
// // -----------Вар 2 ---------
// //Додаємо в Li текст (створення текстової Ноди (NodeList) вручну - більш ефективні і більш захищені)
// const text = document.createTextNode(ingredient);
// newEl.appendChild(text);
// }

//* --------- map ----------
// const newEl = ingredients
//   .map((ingredient) => `<Li>${ingredient}</Li>`)
//   .join("");

//* -------- reduce ---------
const newEl = ingredients.reduce(
  (acc, ingredient) => (acc += `<li>${ingredient}</li>`),
  ""
);

// console.log(newEl);
newList.insertAdjacentHTML("afterbegin", newEl);

// console.log(newEl);
