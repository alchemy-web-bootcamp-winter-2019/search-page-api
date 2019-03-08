import { writePageToQuery } from './hash-query.js';

const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

let currentPageCounter = 1;

export function updatePaging(searchOptions, totalCardsCount) {
    currentPage.textContent = searchOptions.page;
    const totalPageCount = Math.ceil(totalCardsCount / 100);
    totalPages.textContent = totalPageCount;
    previousButton.disabled = searchOptions.page === 1;
    nextButton.disabled = searchOptions.page === totalPageCount;
}

function updateQuery() {
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writePageToQuery(existingQuery, currentPageCounter);
    window.location.hash = newQuery;
}

previousButton.addEventListener('click', () => {
    currentPageCounter--;
    updateQuery();
});

nextButton.addEventListener('click', () => {
    currentPageCounter++;
    updateQuery();
});