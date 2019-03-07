import loadCharacters from './load-characters.js';
import { updateSearchTerm } from './search-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchUrl from './make-search-url.js';
import updatePagingInfo from './paging-component.js';


function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions.name);
    
    const url = makeSearchUrl(queryOptions);
    
    fetch(url)
        .then(response => response.json())
        .then(body => {
            loadCharacters(body.results);
            const pagingInfo = {
                totalPages: body.info.pages,
            };
            updatePagingInfo(pagingInfo);
        })
        .catch((error) => {
            console.log('no results');
            // console.log(error);
            // console.log(body);
            // loadCharacters([]);
            // const pagingInfo = {
            //     totalPages: 0,
            // };
            // updatePagingInfo(pagingInfo);
            //catch null with if statement, create template that loads up an error screen
        });
}

loadQuery();

window.addEventListener('hashchange', loadQuery);