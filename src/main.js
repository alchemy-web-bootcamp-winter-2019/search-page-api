import { loadCharacters } from './character-component.js';
import './search-component.js';
import { readFromQuery } from './hash-query.js';
import { updateSearchTerm } from './search-component.js';
import searchCharacterUrl from './search-character-url.js';
import updatePage from './paging-component.js';
import { updatePagingInfo } from './paging-component.js';

const prompt = document.getElementById('prompt');
const resultsContainer = document.getElementById('results-container');


window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.searchTerm);
    
    const url = searchCharacterUrl(queryOptions);
    
    if(!url) {
        prompt.classList.remove('hidden');
        resultsContainer.classList.add('hidden');
        return;
    } else {
        prompt.classList.add('hidden');
        resultsContainer.classList.remove('hidden');
    }
    
    fetch(url)
        .then(response => response.json())
        .then(body => {
            loadCharacters(body.results);
            const pagingInfo = {
                page: body.page,
                totalPages: body.info.pages
            };
            updatePagingInfo(pagingInfo);
            updatePage(body);
        });
});