"use sctrict";

import head from './modules/head';
import validationForms from './modules/validationForms';
import sendForms from './modules/sendForms';
import mainSlider from './modules/mainSlider';
import scrollDocument from './modules/scrollDocument';
import popupMenu from './modules/popupMenu';
import sliderGallery from './modules/sliderGallery';
import servicesSlider from './modules/servicesSlider';


//Перезвоните мне
head();
popupMenu();
scrollDocument();
//отправка данных
sendForms();
validationForms();
servicesSlider();
sliderGallery();
//слайдер в меню
mainSlider();