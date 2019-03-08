
export function writeSearchToQuery(existingQuery, species) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('species', species);
    searchParams.set('page', 1);
    return searchParams.toString();
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
        page: parseInt(searchParams.get('page')) || 1
    };
    return queryOptions;
}