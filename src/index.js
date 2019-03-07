import loadQuotes from './display-component.js';
import { loadPageInfo } from './display-component.js';
import { readFromQuery } from '../src/hash-query.js';
import makeSearchUrl from './make-search-url.js';
import './event-component.js';

const buttonsContainer = document.getElementById('buttons-container');
const prompt = document.getElementById('prompt');

loadQuery();

window.addEventListener('hashchange', loadQuery);

function loadQuery() {
    const existingQuery = window.location.hash.slice(1);

    const queryOptions = readFromQuery(existingQuery);
    
    const url = makeSearchUrl(queryOptions);

    if(!url){
        buttonsContainer.classList.add('hidden');
        prompt.classList.remove('hidden');
        return;    
    } else {
        buttonsContainer.classList.remove('hidden');
        prompt.classList.add('hidden');
    }

    fetch(url)
        .then(response => response.json())
        .then(result => {
            loadQuotes(result._embedded.quotes);
            loadPageInfo(result.total, queryOptions);
        });
}