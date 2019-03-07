import { writeLimitToQuery } from './querys-components.js';

const limitNode = document.getElementById('text-input');
const generateNode = document.getElementById('generate-button');
// const formNode = document.getElementById('input-form');

generateNode.addEventListener('click', event => {
    event.preventDefault();
    const currentQuery = window.location.hash;
    const catLimit = limitNode.value;
    writeLimitToQuery(currentQuery, catLimit);
   
});

window.addEventListener('hashchange', () => {
    const currentQuery = window.location.hash;
    writeLimitToQuery(currentQuery);
    // console.log('current', );
});
