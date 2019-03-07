export function writeSearchToQuery(existingQuery, search) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('name', search);
    searchParams.set('page', 1);
    return searchParams.toString();
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

export function readFromQuery(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    const searchOptions = {
        name: searchParams.get('name'),
        page: Number(searchParams.get('page')) 
    };
    return searchOptions;
}