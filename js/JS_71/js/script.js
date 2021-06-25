window.addEventListener('DOMContentLoaded', () => {
  const tabs = require('./modules/tabs'),
    timer = require('./modules/timer'),
    forms = require('./modules/forms'),
    calc = require('./modules/calc'),
    cards = require('./modules/cards'),
    modal = require('./modules/modal'),
    slider = require('./modules/slider');

  tabs();
  timer();
  forms();
  calc();
  cards();
  modal();
  slider();
});
