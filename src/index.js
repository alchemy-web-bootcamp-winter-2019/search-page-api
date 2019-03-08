import { readFromQuery } from './hash-query.js';
import updateSearchTerm from './search-component.js';
import makeSearchCharacterUrl from './make-search-character-url.js';
import { loadCharacter } from './make-html-template.js';
import './paging-component.js';
import updatePaging from './paging-component.js';

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
        promptVisibility.textContent = 'Use the search bar to find characters by species';
        charactersVisibility.classList.add('hidden');
        pagingVisibility.classList.add('hidden');

    } else {
        promptVisibility.textContent = '';
    }

    fetch(url)
        .then(response => response.json())
        .then(body => {
            loadCharacter(body.results);
            const pagingInfo = {
                page: queryOptions.page,
                totalPages: body.info.pages
            };
            pagingVisibility.classList.remove('hidden');
            charactersVisibility.classList.remove('hidden');
            updatePaging(pagingInfo);
        })
        .catch(function() {
            pagingVisibility.classList.add('hidden');
            promptVisibility.textContent = `"${queryOptions.searchTerm}" is not a valid species type. Please try a new search.`;
        });
}
