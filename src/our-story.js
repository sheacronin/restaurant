import {appendNewElement, content} from './elements';

function showOurStory() {
    const storyText = "Mario's was founded in 1983.";
    const story = appendNewElement('div', content, 'fade', storyText);
    // Append story image.
    appendNewElement('div', story, 'story-img');
}

export {showOurStory};