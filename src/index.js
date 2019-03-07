import loadCharacters from './load-characters.js';
import { updateSearchTerm } from './search-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchUrl from './make-search-url.js';


function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.name);
    
    const url = makeSearchUrl(queryOptions);
    
    fetch(url)
        .then(response => response.json())
        .then(body => {
            // console.log(body);
            loadCharacters(body.results);
        });
}

loadQuery();

window.addEventListener('hashchange', loadQuery);