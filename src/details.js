import loadDetails from './detail-template.js';
const uriID = window.location.hash.slice(1);


const URL = 'https://api.edamam.com/search?=app_id=c538b2ad&app_key=cdd4607e98052b837fe9d9b3f3c13d10&q=' + uriID;

fetch(URL)
    .then(response => response.json())
    .then(recipeData => {
        loadDetails(recipeData);
    });



