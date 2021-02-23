// Fn to append new elements to parent elements
// with optional class argument.
function appendNewElement(element, parent, cls, txt) {
    const el = document.createElement(element);
    if (cls) {
        el.classList.add(cls);
    }
    if (txt) {
        el.textContent = txt;
    }
    parent.appendChild(el);
    return el;
}

// Store the HTML content div in a variable.
const content = document.getElementById('content');

function loadPage() {
    // Append the header element and store in variable.
    const header = appendNewElement('header', content);
    // Append the hero image to the header.
    appendNewElement('div', header, 'hero-img');
    // Append the nav to the header.
    const nav = appendNewElement('nav', header);
    // Append the ul element for links to the nav.
    const navUl = appendNewElement('ul', nav);
    // Append 'Mario's' h1 element to header.
    appendNewElement('h1', header, undefined, "Mario's");

    return navUl;
}

// Export the funciton and content div.
export {appendNewElement, loadPage, content};