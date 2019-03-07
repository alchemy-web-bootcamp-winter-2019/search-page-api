import './filter-components.js';
import makeSearchUrlFromQuery from './make-search-url.js';
import { readFromQuery } from './query-functions.js';
import loadCharacters from './character-component.js';

const characterListNode = document.getElementById('character-list');

window.addEventListener('hashchange', loadQuery);

function loadQuery() {

const searchOptions = readFromQuery(window.location.hash);
const apiURL = makeSearchUrlFromQuery(searchOptions);
fetch(apiURL).then(response => response.json()).then(body => loadCharacters(body.results));

}