import loadCards from './list-component.js';
import './search-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchNameURL from './make-search-name-url.js';
import { updatePaging } from './paging-component.js';

const prompt = document.getElementById('prompt');
const cardContainer = document.getElementById('card-container');

window.addEventListener('hashchange', loadQuery);

loadQuery();

function loadQuery() {
    const existingQuery = window.location.hash.slice(1);
    const searchOptions = readFromQuery(existingQuery);
    const url = makeSearchNameURL(searchOptions);
    if(!url) {
        prompt.classList.remove('hidden');
        cardContainer.classList.add('hidden');
        return;
    } else {
        prompt.classList.add('hidden');
        cardContainer.classList.remove('hidden');
    }

    fetch(url)
        .then(response => Promise.all([response.json(), response.headers.get('total-count')]))
        .then(responses => {
            loadCards(responses[0].cards);
            updatePaging(searchOptions, responses[1]);
        })
        .catch(err => {
            /* eslint-disable-next-line */
            console.error(err);
        });
}