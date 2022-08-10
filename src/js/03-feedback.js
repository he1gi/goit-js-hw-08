import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const messageEl = document.querySelector('textarea');
const inputEl = document.querySelector('input');

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

if (formData.email) {
  inputEl.value = formData.email;
}
if (formData.message) {
  messageEl.value = formData.message;
}

function onFormInputValue(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (!event.target.email.value) {
    return;
  }
  if (!event.target.message.value) {
    return;
  }

  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInputValue, 500));
