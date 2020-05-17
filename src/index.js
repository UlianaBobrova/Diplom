'use strict';

import togglePopup from './modules/togglePopup';
import sendForm from './modules/sendForm';
import questionBlock from './modules/questionBlock';
import addSentence from './modules/addSentence';
import calc from './modules/calc';
import sendQuestion from './modules/sendQuestion';



//Модальные окна
togglePopup();

//Отправка данных из формы
sendForm();

//Аккордеон
questionBlock();

//Кнопка "Больше +"
addSentence();

//калькулятор
calc(10000);

//окно с консультацией
sendQuestion();