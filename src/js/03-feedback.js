import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);
populateOutput();

const formData = {};

function onFormSubmit(event) {
  event.preventDefault();
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
  console.log(formData);
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function populateOutput() {
  const savedInput = localStorage.getItem('feedback-form-state');
  const parsedInput = JSON.parse(savedInput);
  if (savedInput) {
    form['email'].value = parsedInput.email;
    form['message'].value = parsedInput.message;
  }
}
