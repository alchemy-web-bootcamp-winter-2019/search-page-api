import { writePageToQuery } from './querys-components.js';

const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');
const button = document.getElementById('generate-button');

let currentPageNumber = 1;
previousButton.disabled = true;

const textInputNode = document.getElementById('text-input');

// eslint-disable-next-line eqeqeq
// if(textInputNode.value === false) {
//     nextButton.disabled === true;
// }

export function resetPageNumber() {
    currentPageNumber = 1;
}

export function checkButtonStatus() {
    previousButton.disabled = currentPageNumber <= 1;
}

checkButtonStatus();

nextButton.addEventListener('click', () => {
    const existingQuery = window.location.hash.slice(1);
    event.preventDefault();
    currentPageNumber++;
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
    checkButtonStatus();
});

previousButton.addEventListener('click', () => {
    event.preventDefault();
    const existingQuery = window.location.hash.slice(1);
    currentPageNumber--;
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
    checkButtonStatus();
});