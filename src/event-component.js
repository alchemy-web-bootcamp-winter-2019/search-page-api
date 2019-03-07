import { writePageToQuery, writeSearchToQuery, updateHashQuery } from './hash-query.js';

let currentPageNumber = 1;

const nextButton = document.getElementById('next-button');

nextButton.addEventListener('click', event => {
    event.preventDefault();

    currentPageNumber++;
    updateHashQuery(writePageToQuery, currentPageNumber);
});

const previousButton = document.getElementById('previous-button');

previousButton.addEventListener('click', event => {
    event.preventDefault();

    currentPageNumber--;
    updateHashQuery(writePageToQuery, currentPageNumber);
});

const form = document.getElementById('form');
const searchInput = document.getElementById('search');

form.addEventListener('submit', event => {
    event.preventDefault();
    
    const searchTerm = searchInput.value;
    updateHashQuery(writeSearchToQuery, searchTerm);
});