import { updateSpeciesDropDown } from './search-component';
export function writeSearchToQuery(existingQuery, species, name, status) {
    const searchParams = new URLSearchParams(existingQuery);
    if(species === 'all-characters') {
        updateSpeciesDropDown(species);
        return '';
    } else {
        if(species) {
            searchParams.set('species', species);
        }
        if(name) {
            searchParams.set('name', name);
        }
        if(status) {
            searchParams.set('status', status);
        }
        searchParams.set('page', 1);
        return searchParams.toString(); 
    }
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

export function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const queryOptions = {
        species: searchParams.get('species'),
        page: parseInt(searchParams.get('page')) || 1,
        name: searchParams.get('name'),
        status: searchParams.get('status')
    };
    return queryOptions;
}

