import writeSearchToQuery from './write-query-options.js';
const searchForm = document.getElementById('search');
const searchTermInput = searchForm.querySelector('input');

searchForm.addEventListener('submit', event => {
    event.preventDefault();

    const searchTerm = searchTermInput.value;
    const existingQuery = window.location.hash.slice(1);

    const newQuery = writeSearchToQuery(existingQuery, searchTerm);
    window.location.hash = newQuery;
});

export default function updateSearchTerm(searchOptions) {
    searchTermInput.value = searchOptions.query;
}