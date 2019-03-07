import loadSearch from './search-component.js';
import loadPatterns from './load-patterns.js';
import makeSearchUrl from './make-search-url.js';

//thank you easton and ryan for helping with this part
loadSearch(searchOptions => {
    const username = 'read-4c64aafe518a851fe9f72f0fc442337b';
    const password = 'l13ub39WAF6WkObCfRJ4k9D450cdrAcMWlRWfjir';
    const url = makeSearchUrl(searchOptions);

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
