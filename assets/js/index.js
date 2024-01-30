const mobileBtn = document.getElementById('mobileBtn');
const modal = document.querySelector('.mobileFormClose');
const close = document.querySelector('.close');
const headerBtn = document.querySelector('#headerBtn');

mobileBtn.addEventListener('click', () => {
  modal.classList.toggle('mobileFormView');
});

headerBtn.addEventListener('click', () => {
  modal.classList.toggle('mobileFormView');
});

close.addEventListener('click', () => {
  modal.classList.toggle('mobileFormView');
});
