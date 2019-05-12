import { loadMenu } from './menuTabModule';
import { loadContactForm } from './contactTabModule';
import { loadAboutText } from './aboutTabModule';

let menuNavItem = document.querySelector('#menu');
let contactNavItem = document.querySelector('#contact');
let aboutNavItem = document.querySelector('#about');

menuNavItem.addEventListener('click', loadMenu);
contactNavItem.addEventListener('click', loadContactForm);
aboutNavItem.addEventListener('click', loadAboutText);

loadMenu();