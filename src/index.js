import {appendNewElement, loadPage, content} from './elements';
// Import show functions from each tab's module.
import {showMenu} from './menu';
import {showOurStory} from './our-story';
import {showContact} from './contact';

// Function to clear contents.
function clearContent() {
    for (let i = 0; i < content.children.length; i++) {
        if (i === 0) { // Skip header el.
            continue;
        } else {
            content.removeChild(content.childNodes[i]);
        }
    }
}

// Function to switch tabs.
function switchTab(e) {
    clearContent();
    const tab = e.target.textContent;
    switch (tab) {
        case 'Home':
            showHome();
            break;
        case 'Menu':
            showMenu();
            break; 
        case 'Our Story':
            showOurStory();
            break;
        case 'Contact':
            showContact();
            break;
        default:
            console.log('Something went wrong.');
    }
}

// Run loadPage fn and store navUl here.
const navUl = loadPage();

// Store the tab names in an array.
const tabs = ['Home', 'Menu', 'Our Story', 'Contact'];
// Apppend an li for each nav link.
for (let i = 0; i < tabs.length; i++) {
    const tab = appendNewElement('li', navUl, 'nav-link', tabs[i]);
    tab.addEventListener('click', switchTab);
}

// Function to show homepage contents.
function showHome() {
    //Store copy text in a variable.
    const copyText = "At Mario's, we serve only the best. " +
    "We're a family-owned Italian restaurant serving you since 1972.";
    // Append div with copy to root div.
    appendNewElement('div', content, undefined, copyText);
}

// Run showHome on page load.
showHome();