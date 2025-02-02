const swiper = new Swiper('.swiper', {
  loop: true, // Зацикливаем слайды
  spaceBetween: 20, // Отступ между карточками
  slidesPerView: 4, // Показываем 4 карточки
  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  },
});
