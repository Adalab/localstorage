'use strict';

const cats = {c1: 'Bonaparte', c2: 'Trece'};

localStorage.setItem('cats', JSON.stringify(cats));

const savedCats = JSON.parse(localStorage.getItem('cats'));

console.log('cats:', cats);
if (savedCats !== null) {
  console.log('savedCats:', savedCats);
} else {
  console.log('No hay datos guardados en el LocalStorage');
}


