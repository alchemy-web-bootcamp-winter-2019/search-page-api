// import quoteList from '../src/data.js';
import loadQuotes from './make-template.js';
import { readFromQuery } from '../src/hash-query.js';
import makeSearchUrl from './make-search-url.js';
import './paging-component.js';
import './search-component.js';

loadQuery();

window.addEventListener('hashchange', loadQuery);

function loadQuery() {
    const existingQuery = window.location.hash.slice(1);

    const queryOptions = readFromQuery(existingQuery);
    
    const url = makeSearchUrl(queryOptions);
    
    fetch(url)
        .then(response => response.json())
        .then(result => result._embedded.quotes)
        .then(loadQuotes);
}