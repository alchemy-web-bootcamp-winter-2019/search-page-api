import { loadCharacters } from './character-component.js';
// import { characters } from './data.js';
import './search-component.js';
import { readFromQuery } from './hash-query.js';
import { updateSearchTerm } from './search-component.js';
import searchCharacterUrl from './search-character-url.js';
import updatePage from './paging-component.js';
import { updatePagingInfo } from './paging-component.js';

// loadCharacters(characters);

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.searchTerm);

    const url = searchCharacterUrl(queryOptions);

    fetch(url)
        .then(response => response.json())
        .then(body => {
            loadCharacters(body.results);
            const pagingInfo = {
                page: body.info.page,
                totalPages: body.info.pages
            };
            updatePagingInfo(pagingInfo);
            updatePage(body);
            console.log(body);
        });
});