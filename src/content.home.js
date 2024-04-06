import {texts, images, infoDiv, clearContent } from './content.utils';

export function loadMain() {
    clearContent();

    // Loads the main page.
    const content = document.querySelector('#content');
    
    // Loads the background image
    const restaurantImage = document.createElement('img');
    restaurantImage.src = images["main-background"];
    restaurantImage.id = 'restaurant-image';

    content.appendChild(restaurantImage);

    // Load the information sections.
    const infoAbout = document.createElement('div');
    infoAbout.id = 'info-about';
    infoAbout.textContent = "Shin's Ramen doesn't cook Shin Ramen";
    content.appendChild(infoAbout);

    const img1 = document.createElement('img');
    img1.id='menu-ramen';
    img1.src = images["main-1"];
    content.appendChild(infoDiv(img1, texts['main-1'], true));

    const img2 = document.createElement('img');
    img2.id='location';
    img2.src = images["main-2"];
    content.appendChild(infoDiv(img2, texts['main-2'], false));

    const img3 = document.createElement('img');
    img3.id='menu-ramen';
    img3.src = images["main-3"];
    content.appendChild(infoDiv(img3, texts['main-3'], true));
}
