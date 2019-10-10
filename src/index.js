"use sctrict";

import head from './modules/head';
import validationForms from './modules/validationForms';
import sendForm from './modules/sendForm';
import mainSlider from './modules/mainSlider';
import scrollDocument from './modules/scrollDocument';
import popupMenu from './modules/popupMenu';
import sliderGallery from './modules/sliderGallery';
import calc from './modules/calc';
import servicesSlider from './modules/servicesSlider';


//Перезвоните мне
head();
popupMenu();
scrollDocument();
calc();
//отправка данных
sendForm();
validationForms();
servicesSlider();
sliderGallery();
//слайдер в меню
mainSlider();