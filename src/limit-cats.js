import { writeLimitToQuery, writePageToQuery } from './querys-components.js';
import { resetPageNumber } from './pagnation-component.js';

const limitNode = document.getElementById('text-input');
const generateNode = document.getElementById('generate-button');

generateNode.addEventListener('click', event => {
    let page = 1;
    event.preventDefault();
    let currentQuery = window.location.hash.slice(1);
    const catLimit = limitNode.value;
    currentQuery = writePageToQuery(currentQuery, page);
    const newQuery = writeLimitToQuery(currentQuery, catLimit);
    window.location.hash = newQuery;
    resetPageNumber();
});