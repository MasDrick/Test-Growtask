document.addEventListener('DOMContentLoaded', () => {
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    item.addEventListener('click', () => {
      // Открываем/закрываем текущий аккордеон
      item.classList.toggle('active');
    });
  });
});
