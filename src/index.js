import loadCards from './list-component.js';
import testArray from '../data/test-array.js';
import './search-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchNameURL from './make-search-name-url.js';

// loadCards(testArray);

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const searchOptions = readFromQuery(existingQuery);
    const url = makeSearchNameURL(searchOptions);

    fetch(url)
        .then(response => response.json())
        .then(body => loadCards(body.cards))
        .catch(err => {
            console.log(err);
        });
});