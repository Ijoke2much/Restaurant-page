import {contactsExport} from "./contacts.js";
import homepageExport from "./homepage.js";
import { menuExport } from "./menu.js";
import { name, navigationDiv, handleButtonClick } from './navigation.js';

console.log(name);

navigationDiv();

document.getElementById('btnHome').addEventListener('click', () =>  handleButtonClick(homepageExport));
document.getElementById('btnMenu').addEventListener('click', () => handleButtonClick(menuExport));
document.getElementById('btnContact').addEventListener('click', () => handleButtonClick(contactsExport));
