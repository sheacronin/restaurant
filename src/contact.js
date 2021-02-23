import {appendNewElement, content} from './elements';

function showContact() {
    appendNewElement('div', content, undefined, 'Contact info');
}

export {showContact};