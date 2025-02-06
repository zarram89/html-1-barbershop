ДЛЯ ЧТЕНИЯ
Что происходит, когда пользователь вбивает в браузер адрес google.com - https://htmlacademy.ru/blog/js/brauzer-google
Как работают браузеры - https://web.dev/articles/howbrowserswork?hl=ru
Комикс DNS - https://howdns.works/ru/ep1/
Регистрация домена - https://htmlacademy.ru/blog/soft/how-to-register-domain
Поисковая оптимизация Google - https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=638730362208685044-3185156431&rd=1&hl=ru
Поисковая оптимизация Яндекс - https://yandex.ru/support/webmaster/controlling-robot/html.html
валидатор W3C - https://validator.w3.org/nu/
Слова, часто используемые в CSS-классах - https://github.com/yoksel/common-words
Как сделать весь элемент кликабельным - https://piccalil.li/blog/create-a-semantic-break-out-button-to-make-an-entire-element-clickable/
HTML-коды популярных эмодзи - https://htmlacademy.ru/blog/html/emoji
Специальные символы в HTML - https://htmlacademy.ru/blog/html/special

  <head>
    <meta charset="utf-8">
    <title>Главная страница</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/styles.css">
  </head>

Скриншоты
Win11
PrtSc - скриншот
Windows + V - буфер обмена

Linux
Shift + PrtScr - скриншот
Ctrl + Shift + PrtScr - чтобы не сохранить скриншот, а скопировать его в буфер обмена

macOS
Command + Shift + 3 - скриншот рабочего стола
Command + Shift + 4 - часть экрана

Горячие клавиши VSCode
! и Tab - добавить разметку
Windows — Ctrl + / - быстро добавить комментарий
macOS — Command + /

Windows — Ctrl + G - перейти к строке под номером
macOS — Control + G

Windows — Alt + ↑ / ↓ - поменять строку местами с соседними
macOS  Option + ↑ / ↓

Windows  Shift + Alt + ↓ / ↑ - дублировать строку
macOS  Shift + Option + ↓ / ↑

Windows  Ctrl + Shift + \ - перейти к парной скобке
macOS  Shift + Command + \

Windows — F2 - переименовать переменную
macOS — F2

Windows — Shift + Alt + F - отформатировать документ
macOS  Shift + Option + F

Windows — F12 - перейти к переменной
macOS — F12

Windows — Alt + Z - включить или выключить перенос слов
macOS — Option + Z

Windows — Ctrl + KZ - включить дзен-режим
macOS — Command + KZ
Escape - чтобы выйти

Плагины
HTML Preview - CTR+K V в Windows или Cmd+K V в OS X

При отправке данных мультиселекта на сервер с PHP после имени в значении атрибута name ставятся символы квадратных скобок []. Например, <select name="days[]">. Это необязательное требование для имени мультиселекта, а нужно только для корректной обработки данных в PHP.

HTML Living Standard - https://html.spec.whatwg.org/multipage/
Важные для верстальщиков разделы спецификации:
3. Semantics, structure, and APIs of HTML documents, в котором рассказывается о глобальных вещах, структуре документа, типах контента, глобальных атрибутах и так далее.
4. The elements of HTML, в котором содержится информация о конкретных тегах.

Чтобы определить, можно ли один тег вложить в другой, нужно проанализировать раздел Categories у вкладываемого тега и раздел Content model у тега, в который вкладываем.

Проверим, можно ли вложить p в ul?
Для этого смотрим, какая модель содержания (поле Content model) у тега, в который вкладывается другой тег. В нашем случае у тега ul в Content model находится Zero or more li and script-supporting elements.
Проверяем категории (поле Categories) у тега, который вкладываем в другой тег. В нашем случае у тега p категории Flow и Palpable.
Если есть совпадения между моделью содержания родительского тега и категориями дочернего тега, то вкладывать можно. В нашем случае в ul можно вкладывать либо тег li, либо script-supporting elements, а тег p не является ни тем ни другим, значит, его вкладывать нельзя.

      # chmod +x /usr/local/bin/entrypoint.sh && \
      # /usr/local/bin/entrypoint.sh && \
      # supervisord -c /etc/supervisor/supervisord.conf && \

Тени
.button {
  background: linear-gradient(90deg, #FF1100 0%, #FF8A00 100%); /*  это градиент  */
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);                  /*  это тень  */
  filter: blur(4px);                                            /*  это размытие  */
  border-radius: 10px;                                          /*  это скругление  */
}


https://jakearchibald.github.io/svgomg/
https://squoosh.app/

Шрифты
@font-face {
  font-family: "PT Sans";
  font-style: normal;
  font-weight: 400;
  src: url("../fonts/pt-sans-regular.woff2") format("woff2");
  font-display: swap;
}

Как предотвратить открывание сторонних ссылок
<a class="button" href="https://t.me/htmlacademys" target="_blank" rel="noreferrer noopener">


<!-- Раз это картинка, с которой нельзя скопировать текст, и её содержание ускользнёт от ридеров и роботов, стоит написать для неё визуально или скрытый текст, или хороший `alt` -->

<img src="img/some-pic.jpg" alt="Выход из зоны комфорта: то, что нам советуют. Но нельзя выйти оттуда, куда ты ещё не входил">

Или

<p class="visually-hidden">Выход из зоны комфорта: то, что нам советуют. Но нельзя выйти оттуда, куда ты ещё не входил</p>


.item:not(:last-child) {
  margin-bottom: 20px;
}

Общие правила
Сбрасывайте браузерные стили по умолчанию.
Задавайте текстовым элементам нижний отступ.
Не забывайте сбрасывать отступ у последнего элемента.
Изображениям, с помощью класса, изменяйте блочную модель:

<img class="product-image" width="100" heigth="100" alt="Перфоратор Т1000">

.product-image {
  display: block;
}




Сортировка четкбоксом
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Сортировка элементов на CSS</title>
    <link href="" rel="stylesheet">
    <link href="style.css" rel="stylesheet">
    <style>
      .sort-list {
          display: flex;
          flex-direction: column;
        }

        .input-sort:checked ~ .sort-list {
          flex-direction: column-reverse;
        }

    </style>
  </head>
  <body class="subtle">
    <label for="sort">Сортировать по вкусу</label>
    <input type="checkbox" id="sort" name="sort" class="input-sort">
    <ol class="sort-list">
      <li><a href="/">Мясо</a></li>
      <li><a href="/">Рыба</a></li>
      <li><a href="/">Сметана</a></li>
      <li><a href="/">Молоко</a></li>
      <li><a href="/">Сыр</a></li>
    </ol>
  </body>
</html>


Sticky footer

html {
  height: 100%;
}

body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-height: 100%;
}

.main-container {
  flex-grow: 1;
}


img {
  max-width: 100%;
  height: auto;
}

В браузере Safari картинки могут слегка деформироваться даже после добавления им максимальной ширины и автоматической высоты. Проблему можно решить, обернув картинку в любой подходящий тег, например <figure> или <div>.

.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
  clip: rect(0 0 0 0);
  overflow: hidden;
}

Основные атрибуты, которые характерны для ссылок:

href="#" — собственно ссылка (на внешнюю страницу или якорь);
target="_blank" — цель, в этом значении — открытие в новом окне;
download — скачивание файла, на который ведёт ссылка;
rel="nofollow" — ссылка ведёт на материал, с которым поисковые роботы не должны ассоциировать ваш сайт. Комментарий Google по этому поводу;
lang="fr" — по ссылке контент на французском языке. Коды языков: IANA Language Subtag Registry;
hreflang="de" — означает, что по ссылке — дубликат страницы на немецком. Комментарий Google по этому поводу;
type="text/html" — указывает на MIME-тип материала по ссылке. Список MIME-типов.

a[href*="css"]       /* Применится к ссылкам, в URL которых есть сочетание букв css */
a[href^="https://"]  /* Применится к ссылкам, которые начинаются с https:// */
a[href$=".jpeg"]     /* Применится к ссылкам, которые заканчиваются на .jpeg */
a[type="image/jpeg"] /* Применится к ссылкам, которые помечены атрибутом type как jpeg или jpg */

a[href^="tel:"] {
  font-size: 16px;
  line-height: 32px;
  text-decoration: none;
  color: #000000;
}

a[href^="mailto:"] {
  font-size: 16px;
  line-height: 32px;
  color: #000000;
}

Порядок

a { color: red; }
a:visited { color: grey; }
a:hover { color: blue; }
a:active { background-color: yellow; }

Фокус выносим
a:focus { color: yellow;}

Стили к плейсхолдеру, если он указан в input
<input name="name" type="email" placeholder="example@example.com">

input:placeholder-shown {
    background-color: #FFEB3B;
    border: 2px solid #D28100;
    border-radius: 5px;
}

Стили для input где введен текст

input:not(:placeholder-shown) {
    background-color: #F2E1F5;
}

FOCUS, FOCUS-VISIBLE
-Прописываем значение для состояния :focus
-Проверяем, что поддерживается состояние :focus-visible
-Если поддерживаем, то отменяем значение для :focus
-Задаём значение для :focus-visible

1.Способ с переопределением :focus
/* Указываем значение для браузеров по умолчанию */
button:focus {
  outline: 2px solid #7691F8;
}

/* Для браузеров, которые поддерживают :focus-visible отключаем поведение :focus*/
button:focus:not(:focus-visible) {
  outline: none;
}

/* Прописываем поведение для :focus-visible */
button:focus-visible {
  outline: 3px solid #7691F8;


2.Подход прогрессивного улучшения через директиву @supports

/* Указываем значение для браузеров по умолчанию */
button:focus {
  outline: 2px solid #7691F8;
}

/* Проверяем поддержку свойства :focus-visible, если поддерживаем, то проваливаемся внутрь директивы */
@supports selector(:focus-visible) {

  /* Убираем фокус у элементов */
  button:focus {
    outline: none;
  }

  /* Задаём видимый фокус у элементов */
  button:focus-visible {
    outline: 3px solid #7691F8;
  }
}


3.Подход изящной деградации через директиву @supports и функцию selector()

/*  Указываем :focus-visible */
button:focus-visible {
  outline: 3px solid #7691F8;
  outline-offset: 3px;
}

/*  Проверяем поддержку :focus-visible, если НЕ поддерживаем, то проваливаемся внутрь директивы и прописываем :focus */
@supports not selector(:focus-visible) {
  button:focus {
    /* Fallback for browsers without :focus-visible support */
    outline: 3px solid #7691F8;
    outline-offset: 3px;
  }
}

SVG необходимые атрибуты
width="16"
height="16"
viewBox="0 0 16 16" (не удаляем viewBox в оптимизаторах)
aria-hidden="true" - чтобы не читала читалка
focusable="false" - чтобы таб не фокусировался

для path внутри svg укажем
fill="red" - для заполнения
stroke="blue" - для обрамления


Как вставить SVG
Иконка — растр:
  вставляем как фоновое изображение и обращаемся к дизайнеру за SVG
Если иконка векторная, то определяемся с тем какую функцию выполняет изображение и     выбираем один из вариантов:
  Если изображение является контеным — <img>
  Если изображение меняет состояния — инлайн-свг в разметку
  Если выполняет декоративную роль — вставляем свг фоном в CSS

Фавиконки
https://www.favicon-generator.org/
Для генерации фавиконок используйте сервис favicon-generator: экспортируйте из макета изображение фавиконки в формате PNG, добавьте это изображение в сервис генерации фавиконок, нажмите кнопку «Create favicon», а потом — ссылку «Download the generated favicon». Вы скачаете архив со всеми возможными вариантами фавиконок. Возьмите только favicon.ico, подключите к странице проекта.

<head>
  <link rel="icon" href="favicon.ico" sizes="32x32">
</head>


Задача contain — сохранить пропорции оригинальной картинки. При этом бокс заполнять не обязательно.
<img class="image" src="original.png" width="300" height="193" alt="Кексик">
.image {
  width: 500px;
  background-color: #ccc;
  object-fit: contain;
}

cover растянет картинку по всему боксу, но при этом сохранит пропорции картинки и обрежет всё, что не поместилось.
.image {
  width: 500px;
  background-color: #ccc;
  object-fit: cover;
}

Логотипы никогда не должны искажаться.
Для ситуаций, когда ограничена область показа и когда мы точно знаем, что изображение не должно изменяться, используйте object-fit: contain.


Как правильно вставлять SVG
https://htmlacademy.ru/blog/html/short-4
Первый способ. Первый и самый простой — элемент <img>, который размещается прямо в HTML-коде.
<img src="picture.svg"  alt="За стеклом" width="300px" height="200px">
Такой способ лучше всего подходит контентным изображениям, которым не нужно взаимодействие: логотипы, графики, схемы.
Минус в том, что в таком SVG не будут работать скрипты и любые попытки взаимодействия с элементами внутри обречены. Файл будет как за стеклом: смотреть можно, а трогать нельзя. Хотя внутри всё остальное прекрасно работает, включая CSS-анимации.

Второй способ
Второй способ — фоновая картинка в CSS. Причём неважно, зададите вы его элементу, псевдоэлементу или контентом вставите — результат будет таким же, как с <img>: за стеклом, но внутри что-то работает.
.picture {
  background-image:
    url(picture.svg);
}
Этот способ подходит для оформительской графики, которой не нужно взаимодействие: фоны, иконки и другая мелочь.

Третий способ
ретий способ — вставить содержимое SVG-файлов прямо на страницу, как любые другие теги. При таком способе подключения можно управлять стилями SVG через CSS.
<a class="navigation-link" href="#">
  <svg class="navigation-icon" width="20" height="19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="m19.026 17.05-3.71-3.7c1.002-1.3 1.704-3 1.704-4.9 0-4.4-3.61-8-8.023-8C4.585.45.975 4.15.975 8.55c0 4.4 3.61 8 8.022 8 1.805 0 3.51-.6 4.914-1.7l3.71 3.7 1.405-1.5Zm-10.029-2.5c-3.309 0-6.017-2.7-6.017-6s2.708-6 6.017-6c3.31 0 6.017 2.7 6.017 6s-2.707 6-6.017 6Z" fill="#000"/>
  </svg>
</a>
С таким SVG можно делать то же, что и с обычными HTML-элементами: стили, скрипты. Можно, например, менять цвет заливки при наведении или даже анимировать векторное изображение.
.navigation-icon {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  fill: #000000;
}
Атрибуты тега <svg>:

width — ширина в пикселях или процентах.

height — высота в пикселях или процентах.

viewBox — положение и размер области просмотра.

Значение fill отвечает за цвет изображения.

SVG гораздо больше, чем просто формат графики — это мы с вами уже поняли. Если хотите закопаться глубже, почитайте SVG — учебное руководство от MDN Web Docs.

В итоге: способов множество и все чем-то хороши. Выбирайте подходящий под ваши задачи.

9.1. Отслеживание фокуса на потомках

<div class="wrapper">
  <a href="">Ссылка</a>
</div>
.wrapper:focus-within {
  background-color: red;
}
Фон для .wrapper станет красного цвета, как только <a> получит фокус, так как .wrapper отслеживает все дочерние элементы в фокусе.

Примеры использования
Формы
:focus-within помогает выделить активную форму на сайте, когда выбран один из её инпутов.
<form class="form" action="#" method="post">
  <div>
    <label for="name">Введите имя:</label>
    <input id="name" type="text" name="name" placeholder="Иван">
  </div>
  <div>
    <label for="family">Введите фамилию:</label>
    <input id="family" type="text" name="family" placeholder="Иванов">
  </div>
</form>
.form {
  border: 1px solid;
  color: gray;
  padding: 4px;
}

.form:focus-within {
  background: #eee;
  color: black;
}

Подменю
Так как :focus-within отслеживает фокус не только на дочерних элементах, но и на самом элементе, то с его помощью можно легко сделать подменю доступным при навигации с клавиатуры при помощи tab.
<ul class="catalog">
  <li class="catalog-item">
    <a href="">Каталог</a>
    <ul class="subcatalog">
      <li><a href="">Виртуальная реальность</a></li>
      <li><a href="">Моноподы для селфи</a></li>
    </ul>
  </li>
  <li class="catalog-item"><a href="">Доставка</a></li>
  <li class="catalog-item"><a href="">Гарантия</a></li>
  <li class="catalog-item"><a href="">Контакты</a></li>
</ul>
.catalog-item:focus-within .subcatalog {
  display: block;
}

.subcatalog {
  display: none
}

О формах
https://htmlacademy.ru/blog/html/form-template
