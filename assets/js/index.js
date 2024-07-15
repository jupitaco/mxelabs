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
  const waitlistForm = document.querySelectorAll('.joinwaitlist');
  waitlistForm.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log(e.target);
      emailjs
        .sendForm('service_ymnwkeb', 'MXELabWaitlist_0n3c1on', form)
        .then((res) => res.status === 200 && window.location.reload())
        .catch((err) => console.log(err));
    });
  });
});
