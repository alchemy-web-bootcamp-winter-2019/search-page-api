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
            window.location = './index.html';
        }
        return response.json();
    })
    .then(character => {
        const dom = makeCharacterDetailTemplate(character);
        characterInfo.appendChild(dom);
        name.textContent = character.name;
    })
    .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
    });

