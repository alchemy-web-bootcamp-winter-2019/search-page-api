import loadCats from './create-cat-component.js';
import './limit-cats.js';
import { writePageToQuery } from './querys-components.js';

// const url = 'https://api.thecatapi.com/v1/images/search?limit=15&page=0&order=Desc';
const nextButton = document.getElementById('next-button');
const previousButton = document.getElementById('previous-button');

let currentPageNumber = 1;

nextButton.addEventListener('click', () => {
    const existingQuery = window.location.hash.slice(1);
    event.preventDefault();
    currentPageNumber++;
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
});

previousButton.addEventListener('click', () => {
    event.preventDefault();
    const existingQuery = window.location.hash.slice(1);
    currentPageNumber--;
    const newQuery = writePageToQuery(existingQuery, currentPageNumber);
    window.location.hash = newQuery;
});

fetch(url)
    .then(response => response.json())
    .then(body => {
        // console.log('fetch body', body);
        loadCats(body);
    });