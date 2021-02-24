import {appendNewElement, content} from './elements';

function showOurStory() {
    const storyText = "Mario's was founded in 1983.";
    appendNewElement('div', content, 'fade', storyText);
}

export {showOurStory};