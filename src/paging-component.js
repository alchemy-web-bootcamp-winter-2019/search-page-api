import { writePageToQuery } from './hash-query.js';
const currentPageSpan = document.getElementById('current-page');
const totalPagesSpan = document.getElementById('total-pages');
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');

let currentPageNumber = 1;

export function updatePaging(pagingInfo) {
    currentPageNumber = pagingInfo.page;
    currentPageSpan.textContent = currentPageNumber;
    totalPagesSpan.textContent = pagingInfo.totalPages;
    previousButton.disabled = currentPageNumber === 1;
    nextButton.disabled = currentPageNumber === pagingInfo.totalPages;
}

function updateQuery() {
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
}

previousButton.addEventListener('click', () => {
    currentPageNumber--;
    updateQuery();
});

nextButton.addEventListener('click', () => {
    currentPageNumber++;
    updateQuery();
});
