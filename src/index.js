import loadCats from './create-cat-component.js';
import './limit-cats.js';
import { makeAPIurl, readFromQuery } from './querys-components.js';
import './pagnation-component.js';
import { checkButtonStatus } from './pagnation-component.js';

// const url = 'https://api.thecatapi.com/v1/images/search?limit=15&page=0&order=Desc';

window.addEventListener('hashchange', () => {
    const currentPageNode = document.getElementById('current-page-node');
    const currentQuery = window.location.hash.slice(1);
    const searchParams = new URLSearchParams(currentQuery);
    const currentPage = searchParams.get('page');
    currentPageNode.innerHTML = currentPage;
    const searchParamsObject = readFromQuery(currentQuery);
    const url = makeAPIurl(searchParamsObject);
    fetch(url)
        .then(response => response.json())
        .then(body => {
            loadCats(body);
            checkButtonStatus();
        })
        // .catch(error => console.log('catch errors', error))
    ;
});