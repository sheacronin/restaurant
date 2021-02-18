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

// Export the funciton.
export {appendNewElement};