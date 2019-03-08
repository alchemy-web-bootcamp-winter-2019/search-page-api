import { readFromQuery } from './hash-query.js';
import updateSearchTerm from './search-component.js';
import makeSearchCharacterUrl from './make-search-character-url.js';
import { loadCharacter } from './make-html-template.js';
import './paging-component.js';
import updatePaging from './paging-component.js';

const searchContainer = document.getElementById('search-container');
const pagingContainer = document.getElementById('paging-container');
const characterList = document.getElementById('character-list-container');

const pagingVisibility = document.getElementById('paging-visibility');
const charactersVisibility = document.getElementById('characters-visibility');
const promptVisibility = document.getElementById('prompt-visibility');

window.addEventListener('hashchange', loadQuery);

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.searchTerm);

    const url = makeSearchCharacterUrl(queryOptions);

    if(!url) {
        promptVisibility.classList.remove('hidden');
        charactersVisibility.classList.add('hidden');
        pagingVisibility.classList.add('hidden');

    } else {
        promptVisibility.classList.add('hidden');
        charactersVisibility.classList.remove('hidden');
        pagingVisibility.classList.remove('hidden');
    }

    fetch(url)
        .then(response => response.json())
        .then(body => {
            loadCharacter(body.results);
            const pagingInfo = {
                page: queryOptions.page,
                totalPages: body.info.pages
            };
            updatePaging(pagingInfo);
        });
}
