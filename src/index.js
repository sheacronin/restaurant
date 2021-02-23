import {appendNewElement, content} from './elements';
// Import show functions from each tab's module.
import {showMenu} from './menu';
import {showOurStory} from './our-story';

// Function to switch tabs.
function switchTab(e) {
    const tab = e.target.textContent;
    switch (tab) {
        case 'Home':
            break;
        case 'Menu':
            showMenu();
            break; 
        case 'Our Story':
            showOurStory();
            break;
        case 'Contact':
            break;
        default:
            console.log('Something went wrong.');
    }
}

// Append the header element and store in variable.
const header = appendNewElement('header', document.body);

// Append the hero image to the header.
appendNewElement('div', header, 'hero-img');

// Append the nav to the header.
const nav = appendNewElement('nav', header);

// Append the ul element for links to the nav.
const navUl = appendNewElement('ul', nav);

// Store the link names in an array.
const tabs = ['Home', 'Menu', 'Our Story', 'Contact'];
// Apppend an li for each nav link.
for (let i = 0; i < tabs.length; i++) {
    const tab = appendNewElement('li', navUl, 'nav-link', tabs[i]);
    tab.addEventListener('click', switchTab);
}

// Append 'Mario's' h1 element to header.
appendNewElement('h1', header, undefined, "Mario's");

//Store copy text in a variable.
const copyText = "At Mario's, we serve only the best. " +
"We're a family-owned Italian restaurant serving you since 1972.";
// Append div with copy to root div.
appendNewElement('div', content, undefined, copyText);