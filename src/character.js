import makeCharacterDetailTemplate, { getIdFromQuery } from './character-detail-template.js';

//get character id from url
//get character from api
//load character onto page

const id = getIdFromQuery(window.location.search);

const url = 'https://rickandmortyapi.com/api/character/' + id; 
console.log(url);

const characterInfo = document.getElementById('character-info');
const name = document.getElementById('name');

fetch(url)
    .then(response => {
        if(!response.ok) {
        //handle error
        }
        return response.json();
    })
    .then(body => {
        console.log(body);
        const dom = makeCharacterDetailTemplate(body);
        characterInfo.appendChild(dom);
        name.textContent = body.name;
    })
    .catch((error) => {
        console.log(error);
    });

