import {appendNewElement, content} from './elements';

function showContact() {
    const contact = appendNewElement('div', content, 'fade', 'Contact Us');
    const form = appendNewElement('form', contact);
    const inputs = ['name', 'email', 'message'];
    // Append a div for each input item.
    for (let i = 0; i < inputs.length; i++) {
        const inputContainer = appendNewElement('div', form, 'input-container');
        const label = appendNewElement('label', inputContainer, 'form-label', inputs[i] + ':');
        label.setAttribute('for', inputs[i]);
        // Set type of input el to input, except for message.
        const typeOfEl = inputs[i] === 'message' ? 'textarea' : 'input';
        const input = appendNewElement(typeOfEl, inputContainer, 'form-input');;
        input.setAttribute('name', inputs[i]);
        input.setAttribute('id', inputs[i]);
    }
    // Append a submit button.
    appendNewElement('button', form, 'form-btn', 'SUBMIT');
}

export {showContact};