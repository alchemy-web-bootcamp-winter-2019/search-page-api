import { writeSearchToQuery } from './hash-query.js';

const searchForm = document.getElementById('search-form');
const searchName = document.getElementById('search-name');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const name = searchName.value;
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, name);
    window.location.hash = newQuery;
});