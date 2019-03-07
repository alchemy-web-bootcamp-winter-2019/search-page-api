import updateSearchTerm from './search-component.js';
import readQueryAsOptions from './read-query-options.js';
import loadPatterns from './load-patterns.js';
import makeSearchUrl from './make-search-url.js';

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readQueryAsOptions(query);
    console.log(queryOptions);
    updateSearchTerm(queryOptions.search);

    const username = 'read-4c64aafe518a851fe9f72f0fc442337b';
    const password = 'l13ub39WAF6WkObCfRJ4k9D450cdrAcMWlRWfjir';
    const url = makeSearchUrl(queryOptions);
    console.log(url);
    
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
        });
});



//thank you easton and ryan for helping with this part



// function runSearchFromQuery() {

// }
