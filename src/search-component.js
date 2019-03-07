import { writeSearchToQuery } from './hash-query.js';

const searchForm = document.getElementById('search-form');
const searchTermInput = document.querySelector('input');
const genderInput = document.querySelector('select');

searchForm.addEventListener('submit', event => {
    event.preventDefault();
    const searchTerm = {
        name: searchTermInput.value,
        gender: genderInput.value
    };
    const existingQuery = window.location.hash.slice(1);
    // console.log(existingQuery);
    console.log(searchTerm);
    const newQuery = writeSearchToQuery(existingQuery, searchTerm);
    window.location.hash = newQuery;
});

export function updateSearchTerm(searchTerm) {
    searchTermInput.value = searchTerm.name;
    genderInput.value = searchTerm.gender;
}