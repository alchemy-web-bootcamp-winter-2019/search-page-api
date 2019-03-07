import { writePageToQuery } from "./hash-query.js";
const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPageNode = document.getElementById('current-page');
const totalPagesNode = document.getElementById('total-pages');

let currentPageNumber = 1;

nextButton.addEventListener('click', event => {
    event.preventDefault();

    currentPageNumber++;
    const existingQuery = window.location.hash.slice(1);

    const newQuery = writePageToQuery(existingQuery, currentPageNumber);

    window.location.hash = newQuery;
});

previousButton.addEventListener('click', event => {
    event.preventDefault();

    currentPageNumber--;
    const existingQuery = window.location.hash.slice(1);

    const newQuery = writePageToQuery(existingQuery, currentPageNumber);

    window.location.hash = newQuery;
});