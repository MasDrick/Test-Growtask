document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1); // Убираем #
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        e.preventDefault(); // Отключаем стандартное поведение ссылки

        const offset = 100; // Задаем запас (можно изменить)
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
          top: elementPosition - offset,
          behavior: 'smooth',
        });
      }
    });
  });
});
