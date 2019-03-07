import loadCharacters from './load-characters.js';
//import { updateSearchTerm } from './search-component.js';


//loads all characters
fetch('https://rickandmortyapi.com/api/character/?name=')
    .then(response => response.json())
    .then(body => {
        console.log(body);
        loadCharacters(body.results);
    });

