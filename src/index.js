import loadDisplay from './giphy-display-component.js';
import data from '../data/giphy-data.js';
import './search-component.js';
import { readFromQuery } from './query-functions.js';

console.log(data);
// console.log(data[0].images.fixed_width_small.url); path to url

loadDisplay(data);

window.addEventListener('hashchange', () => {
    const query = window.location.hash.slice(1);
    const queryOptions = readFromQuery(query);
    
});