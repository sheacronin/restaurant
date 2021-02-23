import {appendNewElement, content} from './elements';

// Create a class for menu items.
class MenuItem {
    constructor(name, price, img) {
        this.name = name;
        this.price = price;
        this.img = '../src/menu-items/' + img;
    }


}

const peach = new MenuItem('peach cobbler', 7, 'peach.jpg');

console.log(MenuItem);

function showMenu() {
    const menu = appendNewElement('div', content, 'menu');

    const menuItems = [peach, 'spaghetti', 'mushroom risotto', 'peach cobbler',
    'turtle soup', 'calamari'];

    for (let i = 0; i < menuItems.length; i++) {
        const item = appendNewElement('div', menu, 'menu-item', menuItems[i].name);
        const img = document.createElement('img');
        img.src = menuItems[i].img;
        item.appendChild(img);
    }
}


export {showMenu};