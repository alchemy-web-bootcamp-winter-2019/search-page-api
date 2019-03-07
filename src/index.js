import loadCards from './list-component.js';
import './search-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchNameURL from './make-search-name-url.js';
import { updatePaging } from './paging-component.js';

// loadCards(testArray);

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const searchOptions = readFromQuery(existingQuery);
    const url = makeSearchNameURL(searchOptions);

    fetch(url)
        .then(response => Promise.all([response.json(), response.headers.get('total-count')]))
        .then(responses => {
            loadCards(responses[0].cards);
            console.log(responses[1]);
            updatePaging(searchOptions, responses[1]);
        })
        .catch(err => {
            console.log(err);
        });
});