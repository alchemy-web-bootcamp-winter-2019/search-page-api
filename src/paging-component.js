import { writePageToQuery, readFromQuery } from './hash-query.js';

//update currentPage and totalPages display
//add event listeners to buttons
//update currentPageNumber and totalPageCount

const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPage = document.getElementById('current-page');
const totalPages = document.getElementById('total-pages');

let currentPageNumber = 1;
currentPage.textContent = currentPageNumber;

previousButton.addEventListener('click', () => {
    currentPageNumber--;
    updateQuery();
});

nextButton.addEventListener('click', () => {
    currentPageNumber++;
    updateQuery();
});

export default function updatePagingInfo(pagingInfo) {
    const queryInfo = readFromQuery(window.location.hash.slice(1));
    totalPages.textContent = pagingInfo.totalPages;
    currentPageNumber = queryInfo.page;
    currentPage.textContent = currentPageNumber;
    nextButton.disabled = currentPageNumber === pagingInfo.totalPages;
    previousButton.disabled = currentPageNumber === 1;
}

function updateQuery() {
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
}