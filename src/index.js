import { readFromQuery } from './hash-query.js';
import updateSearchTerm from './search-component.js';
import makeSearchCharacterUrl from './make-search-character-url.js';
import { loadCharacter } from './make-html-template.js';
import './paging-component.js';

const searchContainer = document.getElementById('search-container');
const pagingContainer = document.getElementById('paging-container');
const characterList = document.getElementById('character-list-container');

window.addEventListener('hashchange', loadQuery);

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.searchTerm);

    const url = makeSearchCharacterUrl(queryOptions);

    fetch(url)
        .then(response => response.json())
        .then(body => {
            loadCharacter(body.results);
            console.log(body.results);
        });
}
