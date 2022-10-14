import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

let formData = {};

populateOutput();

function onFormSubmit(event) {
  event.preventDefault();
  formData = {};
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  event.target.reset();
  localStorage.removeItem('feedback-form-state');
}

function onFormInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  // formData[event.target.name] = event.target.value;
}

function populateOutput() {
  const savedInput = localStorage.getItem('feedback-form-state');
  const parsedInput = JSON.parse(savedInput);
  if (parsedInput) {
    formData = parsedInput;
  }
  for (key in parsedInput) {
    if (parsedInput.hasOwnProperty(key)) {
      form[key].value = parsedInput[key];
    }
  }
}
