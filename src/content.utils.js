
import './style.css';
import MainBackground from "./img/background-ramen.jpeg";
import Main1 from "./img/menus/shin-ramen.png";
import Main2 from "./img/location.jpg";
import Main3 from "./img/welcome.jpg";
import MenuBackground from "./img/menus/background.jpg";
import Menu1 from "./img/menus/beef-ramen.jpg";
import Menu2 from "./img/menus/buldak-ramen.jpeg";
import Menu3 from "./img/menus/shin-ramen.png";
import Menu4 from "./img/menus/tonkotsu-ramen.jpeg";

const texts = {
    "main-1" : "Shin's Ramen stands as a testament to the art of noodle craft, a culinary beacon that draws in both the ramen aficionado and the curious foodie alike. Each bowl served is a symphony of flavors, where the broth, rich and deeply aromatic, clings lovingly to perfectly cooked noodles. The chefs at Shin's Ramen treat each ingredient with respect, combining them in ways that elevate the humble ramen bowl into an unforgettable dining experience. Whether it's the tender slices of chashu that melt in your mouth, the vibrant snap of fresh green onions, or the delicate balance of their signature spicy miso, every element is a stroke of genius. Dining at Shin's Ramen isn't just a meal; it's an adventure into the heart of culinary excellence, where tradition and innovation dance in harmony. Truly, Shin's Ramen doesn't just feed the body; it nourishes the soul.",
    "main-2" : "Tucked away in a quaint corner of Japantown, Shin's Ramen is a hidden culinary gem that promises an unforgettable journey into the heart of Japanese cuisine. Just steps from the iconic Peace Plaza, our cozy spot is a sanctuary for those in search of authentic flavors and meticulously crafted ramen. Amidst the charming alleyways, Shin's Ramen stands as a beacon for food enthusiasts, offering a unique dining experience that blends tradition with modern innovation. <br><br>Discover the secret that locals cherish—a meal at Shin's Ramen is not just eating, it's an adventure.",
    "main-3" : "Come Visit!!",
    "menu-1" : "Our Beef Ramen is a hearty bowl of succulence, featuring tender slices of slow-cooked beef that melt in your mouth. Simmered in a rich, savory broth that's infused with a secret blend of spices, this dish is served over a bed of freshly made noodles and topped with crisp vegetables. It's a comforting, satisfying meal that promises to warm your soul with every spoonful.",
    "menu-2" : "For those who dare to explore the fiery side of flavor, our Buldak Ramen is a must-try. This very spicy Korean ramen is a bold concoction of noodles swimming in a spicy chicken broth, seasoned with an intense mix of Korean chilis and spices. Topped with succulent pieces of spicy chicken, it's a dish that will set your taste buds ablaze and keep you coming back for more.",
    "menu-3" : "Elevating the classic to gourmet heights, our Shin Ramen is a far cry from any instant noodle you've ever tasted. Crafted with our house-made broth that simmers for hours, blending flavors from the finest ingredients, this ramen is then paired with perfectly cooked noodles, fresh vegetables, and slices of tender meat. Each bowl is a testament to the art of ramen, offering a deeply satisfying and complex flavor profile.",
    "menu-4" : "Our Tonkotsu Ramen is a masterpiece of depth and complexity. The broth, a creamy, rich elixir, is the result of pork bones simmered to perfection over several hours, releasing all their flavorful marrow and fat. This luxurious base cradles thin, springy noodles, complemented by slices of velvety pork belly, wood ear mushrooms, and a soft-boiled egg. It's a symphony of textures and tastes, offering an unparalleled umami experience.",
}

const images = {
    "main-background" : MainBackground,
    "main-1" : Main1,
    "main-2" : Main2,
    "main-3" : Main3,
    "menu-background" : MenuBackground,
    "menu-1" : Menu1,
    "menu-2" : Menu2,
    "menu-3" : Menu3,
    "menu-4" : Menu4,
}

function clearContent() {
    document.querySelector('#content').innerHTML = '';
}

function infoDiv(image, text, even) {
    const info = document.createElement('div');
    const reviewDiv = document.createElement('div');
    const pReview = document.createElement('p');
    pReview.id='review';
    reviewDiv.id = 'review';
    pReview.innerHTML = text;
    reviewDiv.appendChild(pReview);
    if (even) {
        info.appendChild(reviewDiv);
        info.appendChild(image);
        info.id = 'info-even';
    } else {
        info.appendChild(image);
        info.appendChild(reviewDiv);
        info.id = 'info-odd';
    }
    return info;
}

export {texts, images, infoDiv, clearContent};

