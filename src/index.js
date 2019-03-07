import loadDisplay from './giphy-display-component.js';
import './search-component.js';
import { readFromQuery } from './query-functions.js';
import { makeURL } from './make-url.js';
import { updateSearchField } from './search-component.js';
import loadPagination from './pagination-component.js';

// console.log(data[0].images.fixed_width_small.url); path to url



window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchField(queryOptions.searchTerm);
    const url = makeURL(queryOptions);

    fetch(url)
        .then(response => response.json())
        .then(gifList => {
            console.log(gifList.pagination);
            loadPagination(gifList.pagination);
            loadDisplay(gifList.data);
        });
    
    
});