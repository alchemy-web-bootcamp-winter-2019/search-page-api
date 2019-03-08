import { sortToURL } from './hash-query.js';

const popularityButton = document.getElementById('popularity');
const relevancyButton = document.getElementById('relevancy');
const publishedAtButton = document.getElementById('published-at');


relevancyButton.addEventListener('change', () => {
    const existingQuery = window.location.hash.slice(1);
    if(relevancyButton.checked) {
        const sort = 'relevancy';
        const newQuery = sortToURL(existingQuery, sort);
        window.location.hash = newQuery;
    }
});

popularityButton.addEventListener('change', () => {
    const existingQuery = window.location.hash.slice(1);
    if(popularityButton.checked) {
        const sort = 'popularity';
        const newQuery = sortToURL(existingQuery, sort);
        window.location.hash = newQuery;    
    }
});

publishedAtButton.addEventListener('change', () => {
    const existingQuery = window.location.hash.slice(1);
    if(publishedAtButton.checked) {
        const sort = 'publishedAt';
        const newQuery = sortToURL(existingQuery, sort);
        window.location.hash = newQuery;
    }
});

