/*
Напиши скрипт управління формою логіна.

    Обробка відправлення форми form.login-form повинна відбуватися відповідно до події submit.
    Під час відправлення форми сторінка не повинна перезавантажуватися.
    Якщо у формі є незаповнені поля, виводь alert з попередженням про те, що всі поля повинні бути заповнені.
    Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості, 
    а значення поля - значенням властивості. Для доступу до елементів форми використовуй властивість elements.
    Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.
*/
//TODO (R - Repeta🙂):
//? Репета Модудь 06 відео 02 (Події) 0:23:00 хв., (https://youtu.be/iJq-NwbZL84)

/*
0.Вибрали посилання на форму
1. опрацьовуємо submit відправка форми
1.1. якщо немає потреби перезавантажувати сторінку після відправки форми то скидуємо на об'єкті "event" 
  значення за змовчуванням  - event.preventDefault();
1.2. шукаємо шо є в "event", знаходимо currentTarget - це посилання на тей елемент, 
  який прослуховує цю подію (form "підписалась" на submit і під час submit в event.currentTarget 
  буде посилання на цю форму) ..... потім перенесемо  в 1.3.
event.currentTarget.elements - зберігаються всі елементи форми
1.3. через функцію "formData" збираємо всі значення всіх полів які у неї є, у форматі (ім'я -- значення), для подальшої ідправки даних на сервер.
1.3.1
Подивимось за допомогою функції "forEach", що саме збирається, отже console.log(formData) не пустий (там знаходиться ітератор)
ЦЕ НАЙКРАЩІЙ ПОМІЧНИК ЗБОРУ ДАННИХ З ВЕЛИКОЇ ФОРМИ
1.4. Створюємо змінні для "Alarm"
1.5. Прописуємо кричалку, а якщо все гаразд дивимость шо записалось через ("forEach").
1.6. Обнуляємо форму
*/

// 0
const form = document.querySelector(".login-form");
//1
form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  //1.1.
  event.preventDefault();
  // console.log("відправка");
  //1.2.
  // console.dir(event.currentTarget.elements);
  //1.3.
  const formData = new FormData(event.currentTarget);
  // console.log(formData);
  //1.4. (записи рівноцінні)
  // const { email, password } = event.currentTarget.elements;
  const {
    elements: { email, password },
  } = event.currentTarget;
  // 1.5. + 1.3.1
  if (!email.value || !password.value) {
    return alert("НУ! І чого б оце не заповнити всі поля 🙄");
  } else {
    formData.forEach((value, name) => {
      console.log("onFormSubmit -> name", name);
      console.log("onFormSubmit -> value", value);
    });
  }
  // 1.6.
  event.currentTarget.reset();
}
