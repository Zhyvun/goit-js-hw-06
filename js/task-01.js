/*
HTML містить список категорій ul#categories.
Напиши скрипт, який:

    Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
    Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

В результаті, в консолі будуть виведені наступні повідомлення.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

mentor:
У завданні 1 не потрібний ланцюжок методів, що перебирають, вистачить одного – не ускладнюйте код.
*/

//TODO:
const categories = document.querySelectorAll(".item");
console.log("Number of categories:", categories.length);

const listItems = document.querySelector(".item");

//* Працюючий спосіб

categories.forEach((listItems) => {
  console.log(`Category: ${listItems.firstElementChild.textContent}`);

  // Звертаємось до останнього вузла в селеторі "Item"
  // console.log(`Elements: ${listItems.lastElementChild.childElementCount}`);
  console.log(`Elements: ${listItems.lastElementChild.children.length}`); //* Будь-Яка зі строк валідна
});

//* Чомусь виводить назву тільки першого елементу
// const titleItems = listItems.firstElementChild;
// const numItems = listItems.lastElementChild;

// categories.forEach((menuItems) => {
//   console.log(`Category: ${titleItems.textContent}`);
//   console.log(`Elements: ${numItems.childElementCount}`);
// });
