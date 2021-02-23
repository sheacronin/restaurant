import {appendNewElement, content} from './elements';

function showOurStory() {
    const storyText = "Mario's was founded in 1972.";
    appendNewElement('div', content, undefined, storyText);
}

export {showOurStory};