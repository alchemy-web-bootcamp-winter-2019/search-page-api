import makePatternTemplate from './make-pattern-template.js';
const patternDisplay = document.getElementById('pattern-display');

export default function loadPatterns(data) {
    data.patterns.forEach(pattern => {
        const dom = makePatternTemplate(pattern);
        patternDisplay.appendChild(dom);
    });
}