import './style.css';
import { loadMain } from './content.home';
import { loadMenu } from './content.menu';
import { loadAbout } from './content.about';

// Give features to nav buttons
const home = document.querySelector('button#home');
home.addEventListener('click', () => {
    loadMain();
});

const menu = document.querySelector('button#menu');
menu.addEventListener('click', () => {
    loadMenu();
});

const about = document.querySelector('button#about');
about.addEventListener('click', () => {
    loadAbout();
})

// load the main page upon loading
window.onload = loadMain;