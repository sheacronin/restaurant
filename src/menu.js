import {appendNewElement, content} from './elements';

// Create a class for menu items.
class MenuItem {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = '../src/menu-items/' + img;
    }
}

const menuItems = [];

menuItems.push(new MenuItem('spaghetti', 16, 'spaghetti.jpg'),
               new MenuItem('mushroom risotto', 18, 'mushroom.jpg'),
               new MenuItem('peach cobbler', 7, 'peach.jpg'),
               new MenuItem('turtle soup', 8, 'turtle.jpg'),
               new MenuItem('calamari', 6, 'calamari.jpg'));
              

function showMenu() {
    // Add menu div.
    const menu = appendNewElement('div', content, 'menu');

    // Apend each menu item to menu div.
    for (let i = 0; i < menuItems.length; i++) {
        const item = appendNewElement('div', menu, 'menu-item', menuItems[i].name);
        // Add the menu item's image.
        const img = document.createElement('img');
        img.src = menuItems[i].img;
        item.appendChild(img);
        // Add the menu item's price.
        appendNewElement('p', item, 'price', '$' + menuItems[i].price);
    }
}


export {showMenu};