import { writeSearchToQuery } from './update-hash.js';
const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchInput = document.getElementById('recipe-search');
    const searchTerm = searchInput.value;
    const existingQuery = window.location.hash.slice(1);

    const newQuery = writeSearchToQuery(existingQuery, searchTerm);
    window.location.hash = newQuery;
});