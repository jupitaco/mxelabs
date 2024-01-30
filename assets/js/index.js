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

document.addEventListener('DOMContentLoaded', () => {
  const waitlistForm = document.querySelector('#joinwaitlist');
  waitlistForm.addEventListener('submit', (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2ionx9l', 'MXELabWaitlist_0n3c1on', waitlistForm)
      .then((res) => res.status === 200 && window.location.reload())
      .catch((err) => console.log(err));
  });
});
