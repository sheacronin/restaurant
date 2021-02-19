import {appendNewElement} from './elements';

function showMenu() {
    const menu = appendNewElement('div', document.body);

    const menuItems = ['spaghetti', 'mushroom risotto', 'peach cobbler',
    'turtle soup', 'calamari'];

    for (let i = 0; i < menuItems.length; i++) {
        appendNewElement('div', menu, 'menu-item', menuItems[i]);
    }
}


export {showMenu};