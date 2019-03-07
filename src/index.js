import characterData from '../data/data.js';
import loadCharacterContainer from './make-character-template.js';
import { readFromQuery } from './hash-query.js';
import './search-component.js';
import './paging-component.js';
import { updateSpeciesDropDown } from './search-component.js';
loadCharacterContainer(characterData);

window.addEventListener('hashchange', () => {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);
    console.log(queryOptions);
    updateSpeciesDropDown(queryOptions.species);
});