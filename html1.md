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

  <head>
    <meta charset="utf-8">
    <title>Главная страница</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=PT+Sans+Narrow:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles/styles.css">
  </head>


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
