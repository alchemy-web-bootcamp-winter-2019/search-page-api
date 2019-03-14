import loadCharacterContainer from './make-character-template.js';
import { readFromQuery } from './hash-query.js';
import { updatePaging } from './paging-component.js';
import { updateSpeciesDropDown } from './search-component.js';
import makeSearchSpeciesUrl from './make-search-species-url.js';

loadQuery();

window.addEventListener('hashchange', loadQuery);

function loadQuery() {
    const existingQuery = window.location.hash.slice(1);
    const queryOptions = readFromQuery(existingQuery);

    updateSpeciesDropDown(queryOptions.species);
    const url = makeSearchSpeciesUrl(queryOptions);

    fetch(url)
        .then(response => response.json())
        .then(body => {
            if(body.error) {
                console.log('error', body.error);
            } else {
                loadCharacterContainer(body.results);
                console.log(body);
                const pagingInfo = {
                    page: parseInt(queryOptions.page),
                    totalPages: body.info.pages
                };
                updatePaging(pagingInfo);
            }
        });
}
