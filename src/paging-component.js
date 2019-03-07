import { writePageToQuery, updateHashQuery } from "./hash-query.js";
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPageNode = document.getElementById('current-page');
const totalPagesNode = document.getElementById('total-pages');

let currentPageNumber = 1;

nextButton.addEventListener('click', event => {
    event.preventDefault();

    currentPageNumber++;
    updateHashQuery(writePageToQuery, currentPageNumber);
});

previousButton.addEventListener('click', event => {
    event.preventDefault();

    currentPageNumber--;
    updateHashQuery(writePageToQuery, currentPageNumber);
});

export function loadPageInfo(totalQuotesNumber, page){

    const PER_PAGE = 9;
    currentPageNode.textContent = page;
    const totalPagesNumber = Math.ceil(totalQuotesNumber / PER_PAGE);
    totalPagesNode.textContent = totalPagesNumber;
    nextButton.disabled = currentPageNumber === totalPagesNumber;
    previousButton.disabled = page === 1;
}
