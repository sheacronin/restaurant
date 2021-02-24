import {appendNewElement, content} from './elements';

function showContact() {
    appendNewElement('div', content, 'fade', 'Contact info');
}

export {showContact};