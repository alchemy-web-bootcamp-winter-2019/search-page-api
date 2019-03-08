import { searchToURL } from './hash-query.js';

const searchFormNode = document.getElementById('search-form');
const mainNode = document.getElementById('main');
const buttonAreaNode = document.getElementById('button-area');

export default function updateSearchTerm() {
    searchFormNode.addEventListener('submit', event => {
        event.preventDefault();
        buttonAreaNode.classList.add('show');
        mainNode.classList.add('show');

        const formData = new FormData(searchFormNode);
        const q = formData.get('search-value');
        const existingQuery = window.location.hash.slice(1);
        const newQuery = searchToURL(existingQuery, q);
        window.location.hash = newQuery;
    });
}
