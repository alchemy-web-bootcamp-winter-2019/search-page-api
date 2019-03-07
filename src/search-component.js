import { writeSearchToQuery } from './hash-query.js';
const searchForm = document.getElementById('form');
const speciesDropdown = document.getElementById('species-dropdown');

searchForm.addEventListener('change', event => {
    event.preventDefault();

    const existingQuery = window.location.hash.slice(1);
    const speciesChoice = speciesDropdown.value;
    const newQuery = writeSearchToQuery(existingQuery, speciesChoice);
    window.location.hash = newQuery;
});

