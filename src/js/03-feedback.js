import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
const areaEl = document.querySelector('textarea');
let formData;

updateOutput();

formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInputValue, 500));

function onFormInputValue(event) {
  formData = localStorage.getItem(STORAGE_KEY) || {};
  console.log(formData);
  formData[event.target.name] = event.target.value;
  localStorage.setItem(STORAGE_KEY, formData);
}

function onFormSubmit(event) {
  event.preventDefault();
  if (!event.target.name) {
    return;
  }
  if (!event.target.message) {
    return;
  }

  event.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function updateOutput() {
  areaEl.textContent = localStorage.getItem(STORAGE_KEY) || '';
  console.log(JSON.stringify(localStorage.getItem(STORAGE_KEY)));
}
// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', a);
// refs.input.addEventListener('input', a);

// function onTextInput(event) {
//   const message = event.target.value;
//   localStorage.setItem(STORAGE_KEY, message);
// }

// function onFormSubmit(event) {
//   event.preventDefault();
//   event.target.reset();
// }

// function a() {
//   const savedMassage = localStorage.getItem(STORAGE_KEY);
//   if (savedMassage) {
//     refs.input.value = savedMassage;
//   }
//   if (savedMassage) {
//     refs.textarea.value = savedMassage;
//   }
// }
