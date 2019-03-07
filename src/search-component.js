import { writeSearchToQuery } from './hash-query.js';
const searchForm = document.getElementById('form');
const speciesDropDown = document.getElementById('species-dropdown');

searchForm.addEventListener('change', event => {
    event.preventDefault();

    const existingQuery = window.location.hash.slice(1);
    const speciesChoice = speciesDropDown.value;
    const newQuery = writeSearchToQuery(existingQuery, speciesChoice);
    window.location.hash = newQuery;
});

export function updateSpeciesDropDown(species) {
    speciesDropDown.value = species;
}