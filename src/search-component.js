import { writeSearchToQuery } from './hash-query.js';

const searchForm = document.getElementById('search-form');
const searchName = document.getElementById('search-name');

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const searchFormData = new FormData(searchForm);;

    const searchTerms = {
        name: searchName.value,
        colors: searchFormData.getAll('color')
    };
    const existingQuery = window.location.hash.slice(1);
    const newQuery = writeSearchToQuery(existingQuery, name);
    window.location.hash = newQuery;
});