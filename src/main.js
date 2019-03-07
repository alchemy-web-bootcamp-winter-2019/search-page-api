import { loadCharacters } from './character-component.js';
import { characters } from './data.js';
import './search-component.js';
import { readFromQuery } from './hash-query.js';

loadCharacters(characters);

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    console.log(queryOptions);
});