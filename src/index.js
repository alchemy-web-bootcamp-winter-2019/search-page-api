import updateSearchTerm from './search-component.js';
import readQueryAsOptions from './read-query-options.js';
import loadPatterns from './load-patterns.js';
import makeSearchUrl from './make-search-url.js';
import { updatePagingInfo } from './paging-component.js';


window.addEventListener('hashchange', loadQuery) ;

loadQuery();

function loadQuery() {
    const query = window.location.hash.slice(1);
    const queryOptions = readQueryAsOptions(query);
    updateSearchTerm(queryOptions.search);

    const username = 'read-4c64aafe518a851fe9f72f0fc442337b';
    const password = 'l13ub39WAF6WkObCfRJ4k9D450cdrAcMWlRWfjir';
    const url = makeSearchUrl(queryOptions);

    
    const auth = window.btoa(username + ':' + password);
    fetch(url, {
        headers: {
            Authorization: `Basic ${auth}`,
            Origin: null
        }
    })
        .then(res => res.json())
        .then(results => {
            console.log(results);
            loadPatterns(results);

            const pagingInfo = {
                page: results.paginator.page,
                totalPages: results.paginator.page_count, 
            };
            console.log(results.paginator.page);
            
            updatePagingInfo(pagingInfo);

        });
        
}



