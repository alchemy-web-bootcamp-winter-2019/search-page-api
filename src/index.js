//import data from './sample-object.js';
import loadPatterns from './load-patterns.js';

//const query = encodeURIComponent('ding dong');
//const page = 1;
//const URL = 'https://api.ravelry.com/patterns/search.json?query=\'ding+dong\'&page=1';

const username = 'read-4c64aafe518a851fe9f72f0fc442337b';
const password = 'l13ub39WAF6WkObCfRJ4k9D450cdrAcMWlRWfjir';
const url = 'https://cors-anywhere.herokuapp.com/https://api.ravelry.com/patterns/search.json?query=ding+dong';

//thank you easton and ryan for helping with this part
const auth = window.btoa(username + ':' + password);
fetch(url, {
    headers: {
        Authorization: `Basic ${auth}`,
        Origin: null
    }
})
    .then(res => res.json())
    .then(results => loadPatterns(results));

//when loadPatterns is applied to results from fetch, error is thrown
