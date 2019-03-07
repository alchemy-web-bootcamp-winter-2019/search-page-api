import { loadCharacters } from './character-component.js';
import { characters } from './data.js';
import './search-component.js';
import { readFromQuery } from './hash-query.js';
import { updateSearchTerm } from './search-component.js';

loadCharacters(characters);

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.searchTerm);
});