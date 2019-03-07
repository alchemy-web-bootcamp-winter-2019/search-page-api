import loadCats from './create-cat-component.js';
import './limit-cats.js';
import { writePageToQuery, makeAPIurl, readFromQuery } from './querys-components.js';

// const url = 'https://api.thecatapi.com/v1/images/search?limit=15&page=0&order=Desc';
const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');

let currentPageNumber = 1;
previousButton.disabled = true;


export function resetPageNumber() {
    currentPageNumber = 1;
}

function checkButtonStatus(){
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

window.addEventListener('hashchange', () => {
    const currentPageNode = document.getElementById('current-page-node');
    const currentQuery = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(currentQuery);
    const currentPage = searchParams.get('page');
    currentPageNode.innerHTML = currentPage;
    const searchParamsObject = readFromQuery(currentQuery);
    const url = makeAPIurl(searchParamsObject);
    fetch(url)
        .then(response => response.json())
        .then(body => {
            console.log('fetch body', body);
            loadCats(body);
        });
        // .catch(console.error());
});
