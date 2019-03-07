import makePatternTemplate from './make-pattern-template.js';
const patternDisplay = document.getElementById('pattern-display');

export default function loadPatterns(data) {
    // while(patternDisplay.children.length > 0) {
    //     patternDisplay.lastElementChild.remove();
    // }
    data.patterns.forEach(pattern => {
        const dom = makePatternTemplate(pattern);
        patternDisplay.appendChild(dom);
    });
}