import { searchToURL } from './hash-query.js';

const searchFormNode = document.getElementById('search-form');
const bodyNode = document.getElementById('body');

export default function updateSearchTerm() {
    searchFormNode.addEventListener('submit', event => {
        event.preventDefault();
        var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        console.log(randomColor);
        bodyNode.style.backgroundColor = randomColor;
        console.log(bodyNode);


        const formData = new FormData(searchFormNode);
        const q = formData.get('search-value');
        const existingQuery = window.location.hash.slice(1);
        const newQuery = searchToURL(existingQuery, q);
        window.location.hash = newQuery;
    });
}
