import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-msg';

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', a);
refs.input.addEventListener('input', a);

function onTextInput(event) {
  const message = event.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

function onFormSubmit(event) {
  event.preventDefault();
  event.target.reset();
}

function a() {
  const savedMassage = localStorage.getItem(STORAGE_KEY);
  if (savedMassage) {
    refs.input.value = savedMassage;
  }
  if (savedMassage) {
    refs.textarea.value = savedMassage;
  }
}
