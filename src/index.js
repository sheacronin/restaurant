import {appendNewElement} from './elements.js';

// Store the HTML content div in a variable.
const content = document.getElementById('content');

// Append the header element and store in variable.
const header = appendNewElement('header', content);

// Append the hero image to the header.
appendNewElement('div', header, 'hero-img');

// Append the nav to the header.
const nav = appendNewElement('nav', header);

// Append the ul element for links to the nav.
const navUl = appendNewElement('ul', nav);

// Store the link names in an array.
const links = ['Home', 'Menu', 'Delivery', 'Our Story'];
// Apppend an li for each nav link.
for (let i = 0; i < links.length; i++) {
    const li = appendNewElement('li', navUl, 'nav-link');
    const a = appendNewElement('a', li, undefined, links[i]);
    a.href = '#';
}

// Append 'Mario's' h1 element to header.
appendNewElement('h1', header, undefined, "Mario's");

//Store copy text in a variable.
const copyText = "At Mario's, we serve only the best. " +
"We're a family-owned Italian restaurant serving you since 1972.";
// Append div with copy to root div.
appendNewElement('div', content, undefined, copyText);