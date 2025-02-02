document.getElementById('colorSwitch').addEventListener('change', function () {
  const block = document.getElementById('colorBlock');
  if (this.checked) {
    block.classList.add('gradient-red');
    block.classList.remove('gradient-default');
  } else {
    block.classList.add('gradient-default');
    block.classList.remove('gradient-red');
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.getElementById('btn');
  const popupContainer = document.querySelector('.popup-container');
  const burgerIcon = burgerButton.querySelector('img');
  const overlay = document.querySelector('.overlay');
  const listItems = document.querySelectorAll('.popup-container li');

  function togglePopup() {
    popupContainer.classList.toggle('active');
    overlay.classList.toggle('active');
    burgerIcon.src = popupContainer.classList.contains('active')
      ? './img/icons/close.svg'
      : './img/icons/burger.svg';
  }

  function closePopup() {
    popupContainer.classList.remove('active');
    overlay.classList.remove('active');
    burgerIcon.src = './img/icons/burger.svg';
  }

  burgerButton.addEventListener('click', togglePopup);
  overlay.addEventListener('click', closePopup);
  listItems.forEach((item) => item.addEventListener('click', closePopup));
});
