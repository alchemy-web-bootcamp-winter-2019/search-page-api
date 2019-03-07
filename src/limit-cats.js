import { writeLimitToQuery } from './querys-components.js';

const limitNode = document.getElementById('text-input');
const generateNode = document.getElementById('generate-button');

generateNode.addEventListener('click', event => {
    event.preventDefault();
    const currentQuery = window.location.hash.slice(1);
    const catLimit = limitNode.value;
    const newQuery = writeLimitToQuery(currentQuery, catLimit);
    window.location.hash = newQuery;
});