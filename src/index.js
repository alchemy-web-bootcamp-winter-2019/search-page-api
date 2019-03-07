import './filter-components.js';

fetch('https://rickandmortyapi.com/api/character/?name=rick&status=dead&species=human&page=1').then(response => response.json()).then(body => console.log(body.results[0]));