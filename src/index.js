import { readFromQuery } from './hash-query.js';
import updateSearchTerm from './search-component.js';

const searchContainer = document.getElementById('search-container');
const pagingContainer = document.getElementById('paging-container');
const characterList = document.getElementById('character-list-container');

window.addEventListener('hashchange', loadQuery);

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.searchTerm);
}
