/*
Напиши скрипт для створення галереї зображень на підставі масиву даних. 
HTML містить список ul.gallery.
Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. 
Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

    Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
    Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
*/

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

//TODO (S):
//отримуємо об'єкт
const newList = document.querySelector("ul.gallery");

// ----- Вар 1 (кожну властивість окремо) --------
// newList.style.listStyle = "none";
// newList.style.display = "flex";
// newList.style.justifyContent = "center";
// newList.style.margin = "0px";
// newList.style.padding = "0px";

// ---------- Вар 2 (через властивість cssText - перезаписує всі додані раніше властивості)
newList.style.cssText = `
    list-style: none;
    display: flex;
    justify-content: center;
    margin: 0;
    padding: 0;
`;

const imgList = images
  .map(
    ({ url, alt }) =>
      `<li>
    <img src="${url}" alt="${alt}" width = "320">
    </li>`
  )
  .join("");

// console.log(imgList);

newList.insertAdjacentHTML("afterbegin", imgList);
