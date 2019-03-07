import './filter-components.js';
import makeSearchUrlFromQuery from './make-search-url.js';
import { readFromQuery } from './query-functions.js';
import loadCharacters from './character-component.js';
import updatePaging from './paging-component.js';

window.addEventListener('hashchange', loadQuery);

function loadQuery() {

    const searchOptions = readFromQuery(window.location.hash);
    const apiURL = makeSearchUrlFromQuery(searchOptions);
    let pagingInfo = {};
    fetch(apiURL)
        .then(response => response.json())
        .then(body => {
            loadCharacters(body.results);
            pagingInfo = {
                page: parseInt(searchOptions.page),
                totalPages: body.info.pages
            };
            updatePaging(pagingInfo);})
        .catch(err => console.error(err));

}