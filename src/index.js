import quoteList from '../src/data.js';
import loadQuotes from './make-template.js';
import { readFromQuery } from '../src/hash-query.js';
import './search-component.js';

loadQuotes(quoteList);

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);

    const queryOptions = readFromQuery(existingQuery);
    console.log(queryOptions);
});