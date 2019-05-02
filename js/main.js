'use strict';

const field = document.querySelector('.js__textarea');

const saveData = event => {
  const element = event.currentTarget;
  localStorage.setItem('myText',JSON.stringify(element.value));
};

if (localStorage.getItem('myText') !== null) {
  // Hay datos en el LS
  field.value = JSON.parse(localStorage.getItem('myText'))
} else {
  // No hay datos
  field.value = '';
}

field.addEventListener('keyup', saveData);
