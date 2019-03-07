import loadCharacters, { noResults } from './load-characters.js';
import { updateSearchTerm } from './search-component.js';
import { readFromQuery } from './hash-query.js';
import makeSearchUrl from './make-search-url.js';
import updatePagingInfo from './paging-component.js';


function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    updateSearchTerm(queryOptions);
    
    const url = makeSearchUrl(queryOptions);
    
    fetch(url)
        .then(response => {
            if(!response.ok) {
                noResults();
                const pagingInfo = {
                    totalPages: 1
                };
                updatePagingInfo(pagingInfo);
            }
            return response.json();
        })
        .then(body => {
            if(body.results) {
                loadCharacters(body.results);
                const pagingInfo = {
                    totalPages: body.info.pages,
                };
                updatePagingInfo(pagingInfo);
            }
        })
        .catch((error) => {
            console.log(error);
        });
}

loadQuery();

window.addEventListener('hashchange', loadQuery);