import { writeSearchToQuery, updateHashQuery } from './hash-query.js';
const form = document.getElementById('form');
const searchInput = document.getElementById('search');


form.addEventListener('submit', event => {
    event.preventDefault();
    
    const searchTerm = searchInput.value;
    updateHashQuery(writeSearchToQuery, searchTerm);
});