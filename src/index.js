import './filter-components.js';
import makeSearchUrlFromQuery from './make-search-url.js';
import { readFromQuery } from './query-functions.js';

const characterListNode = document.getElementById('character-list');

window.addEventListener('hashchange', loadQuery);

function loadQuery() {

const test = readFromQuery(window.location.hash);
console.log(test, 'hi');

}