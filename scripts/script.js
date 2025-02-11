document.addEventListener("DOMContentLoaded", function () {
  // Данные для слайдера
  const images = [
    "images/gallery-1.jpg",
    "images/gallery-2.jpg",
    "images/gallery-3.jpg",
    "images/gallery-4.jpg",
  ];

  // Элементы слайдера
  const sliderImage = document.querySelector(".slider-image");
  const prevButton = document.querySelector(".slider-prev");
  const nextButton = document.querySelector(".slider-next");
  const divisionButtons = document.querySelectorAll(".slider-division-button");

  // Элементы модального окна
  const modalOverlay = document.querySelector(".modal-overlay");
  const modalImage = document.querySelector(".modal-image");
  const modalCloseButton = document.querySelector(".modal-close-button");

  let currentIndex = 0;

  // Функция для обновления слайдера
  function updateSlider() {
    sliderImage.src = images[currentIndex];
    divisionButtons.forEach((button, index) => {
      button.classList.toggle(
        "slider-division-button-current",
        index === currentIndex
      );
    });
  }

  // Переключение на предыдущее изображение
  prevButton.addEventListener("click", function () {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    updateSlider();
  });

  // Переключение на следующее изображение
  nextButton.addEventListener("click", function () {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    updateSlider();
  });

  // Переключение по кнопкам внизу слайдера
  divisionButtons.forEach((button, index) => {
    button.addEventListener("click", function () {
      currentIndex = index;
      updateSlider();
    });
  });

  // Инициализация слайдера
  updateSlider();

  // Функция для открытия модального окна
  function openModal() {
    modalImage.src = images[currentIndex]; // Устанавливаем текущее изображение в модальное окно
    modalOverlay.classList.add("active"); // Показываем модальное окно

    // Добавляем слушатели событий при открытии модального окна
    modalCloseButton.addEventListener("click", closeModal);
    modalOverlay.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscapeKey);
  }

  // Функция для закрытия модального окна
  function closeModal() {
    modalOverlay.classList.remove("active"); // Скрываем модальное окно

    // Удаляем слушатели событий при закрытии модального окна
    modalCloseButton.removeEventListener("click", closeModal);
    modalOverlay.removeEventListener("click", handleOutsideClick);
    document.removeEventListener("keydown", handleEscapeKey);
  }

  // Обработчик клика за пределами изображения
  function handleOutsideClick(event) {
    if (event.target === modalOverlay) {
      closeModal(); // Закрываем модальное окно
    }
  }

  // Обработчик нажатия клавиши Escape
  function handleEscapeKey(event) {
    if (event.key === "Escape") {
      closeModal(); // Закрываем модальное окно
    }
  }

  // Открытие модального окна при клике на изображение слайдера
  sliderImage.addEventListener("click", openModal);
});
