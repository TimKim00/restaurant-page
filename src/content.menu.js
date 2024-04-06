import {texts, images, infoDiv, clearContent } from './content.utils';

export function loadMenu() {
    clearContent();

    // Loads the content.
    const content = document.querySelector('#content');
    
    // Loads the background image
    const restaurantImage = document.createElement('img');
    restaurantImage.src = images["menu-background"];
    restaurantImage.id = 'restaurant-image';

    content.appendChild(restaurantImage);

    const img1 = document.createElement('img');
    img1.id='menu-1';
    img1.src = images["menu-1"];
    content.appendChild(infoDiv(img1, texts['menu-1'], true));

    const img2 = document.createElement('img');
    img2.id='item-left';
    img2.src = images["menu-2"];
    content.appendChild(infoDiv(img2, texts['menu-2'], false));

    const img3 = document.createElement('img');
    img3.id='menu-3';
    img3.src = images["menu-3"];
    content.appendChild(infoDiv(img3, texts['menu-3'], true));

    const img4 = document.createElement('img');
    img4.id='item-left';
    img4.src = images["menu-4"];
    content.appendChild(infoDiv(img4, texts['menu-4'], false));
}