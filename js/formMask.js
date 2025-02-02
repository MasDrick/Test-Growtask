document.addEventListener('DOMContentLoaded', () => {
  // Маска для телефона
  const phoneInput = document.getElementById('phone');
  phoneInput.addEventListener('input', function (event) {
    let value = event.target.value.replace(/\D/g, '');
    let formattedValue = '';

    if (value.length > 0) {
      formattedValue += '+7 ';
    }
    if (value.length > 1) {
      formattedValue += '(' + value.substring(1, 4);
    }
    if (value.length > 4) {
      formattedValue += ') ' + value.substring(4, 7);
    }
    if (value.length > 7) {
      formattedValue += '-' + value.substring(7, 9);
    }
    if (value.length > 9) {
      formattedValue += '-' + value.substring(9, 11);
    }

    event.target.value = formattedValue;
  });

  // Маска для имени
  const nameInput = document.getElementById('name');
  nameInput.addEventListener('input', function (event) {
    let value = event.target.value;
    value = value.replace(/[^A-Za-zА-Яа-я\s]/g, '');
    event.target.value = value;
  });

  // Проверка email
  const emailInput = document.getElementById('email');
  emailInput.addEventListener('input', function (event) {
    const value = event.target.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(value)) {
      event.target.setCustomValidity('Введите корректный email.');
    } else {
      event.target.setCustomValidity('');
    }
  });

  const form = document.getElementById('myForm');

  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвращаем стандартную отправку формы

    // Получаем значения полей формы
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const checkbox = document.getElementById('checkbox').checked;

    // Создаем сообщение для уведомления
    const message = `
            Имя и фамилия: ${name}\n
            Телефон: ${phone}\n
            Почта: ${email}\n
            Чек-бокс: ${checkbox ? 'Отмечен' : 'Не отмечен'}
        `;

    // Проверяем поддержку уведомлений браузером
    if (!('Notification' in window)) {
      alert('Этот браузер не поддерживает уведомления.');
      return;
    }

    // Запрашиваем разрешение на уведомления
    Notification.requestPermission().then(function (permission) {
      if (permission === 'granted') {
        // Создаем и показываем уведомление
        new Notification('Форма отправлена!', {
          body: message,
          icon: 'path/to/icon.png', // Укажите путь к иконке, если необходимо
        });
      } else {
        alert('Разрешение на уведомления не предоставлено.');
      }
    });

    // Здесь можно добавить код для обработки данных формы, например, отправка на сервер
    console.log('Форма отправлена!');
    console.log('Имя:', name);
    console.log('Телефон:', phone);
    console.log('Почта:', email);
    console.log('Чек-бокс:', checkbox);

    // После успешной обработки можно перенаправить пользователя или показать сообщение
    alert('Форма успешно отправлена!');
  });
});
