import Sobre from './slide.js';

const sobre = new Sobre('.slide', '.slide-wrapper');
sobre.init();
sobre.changeSlide(2);
sobre.transition();
