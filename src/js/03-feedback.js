import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const messageEl = document.querySelector('textarea');
const inputEl = document.querySelector('input');
let formData;

updateOutput();

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInputValue, 500));

function onFormInputValue(event) {
  formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
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

function updateOutput() {
  messageEl.textContent =
    JSON.parse(localStorage.getItem(STORAGE_KEY))['message'] || '';
  inputEl.value = JSON.parse(localStorage.getItem(STORAGE_KEY))['email'] || '';
}
