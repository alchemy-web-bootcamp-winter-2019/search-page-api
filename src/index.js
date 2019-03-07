import loadDisplay from './giphy-display-component.js';
import './search-component.js';
import { readFromQuery } from './query-functions.js';
import { makeURL } from './make-url.js';
import { updateSearchField } from './search-component.js';
import loadPagination from './pagination-component.js';

const paginationButtons = document.getElementById('pagination-buttons');
const startMessage = document.getElementById('start-message');

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchField(queryOptions.searchTerm);
    const url = makeURL(queryOptions);
    paginationButtons.classList.remove('hidden');
    startMessage.classList.add('hidden');

    fetch(url)
        .then(response => response.json())
        .then(gifList => {
            loadPagination(gifList.pagination);
            loadDisplay(gifList.data);
        });
    
    
});