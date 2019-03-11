import { writeSearchToQuery } from './hash-query.js';
const searchForm = document.getElementById('form');
const speciesDropDown = document.getElementById('species-dropdown');
const nameInput = document.getElementById('name-search');

searchForm.addEventListener('change', event => {
    event.preventDefault();
    const existingQuery = window.location.hash.slice(1);
    const speciesChoice = speciesDropDown.value;
    console.log(speciesChoice);
    const name = nameInput.value;
    const newQuery = writeSearchToQuery(existingQuery, speciesChoice, name);
    window.location.hash = newQuery;
});

export function updateSpeciesDropDown(species) {
    speciesDropDown.value = species;
}