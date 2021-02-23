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

// Export the funciton.
export {appendNewElement};
// Export the content div.
export {content};