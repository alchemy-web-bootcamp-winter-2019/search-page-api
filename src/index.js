import loadCats from './create-cat-component.js';
import './limit-cats.js';



// const url = 'https://api.thecatapi.com/v1/images/search?limit=15&page=0&order=Desc';

fetch(url)
    .then(response => response.json())
    .then(body => {
        console.log('fetch body', body);
        loadCats(body);
    });