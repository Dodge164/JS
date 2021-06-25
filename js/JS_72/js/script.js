import tabs from './modules/tabs';
import timer from './modules/timer';
import forms from './modules/forms';
import calc from './modules/calc';
import cards from './modules/cards';
import modal from './modules/modal';
import slider from './modules/slider';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(
    () => openModal('.modal', modalTimerId),
    300000
  );
  tabs(
    '.tabheader__item',
    '.tabcontent',
    '.tabheader__items',
    'tabheader__item_active'
  );
  timer('.timer', '2021-07-01');
  forms('form', modalTimerId);
  calc();
  cards();
  modal('[data-modal]', '.modal', modalTimerId);
  slider({
    container: '.offer__slider',
    slide: '.offer__slide',
    nxtArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
  });
});
