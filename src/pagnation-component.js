import { writePageToQuery } from './querys-components.js';

const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');
// const button = document.getElementById('generate-button');
// const textInputNode = document.getElementById('text-input');

let currentPageNumber = 0;
previousButton.disabled = true;

export function resetPageNumber() {
    currentPageNumber = 1;
}

export function checkButtonStatus() {
    previousButton.disabled = currentPageNumber <= 1;
}

nextButton.addEventListener('click', () => {
    event.preventDefault();
    const existingQuery = window.location.hash.slice(1);
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