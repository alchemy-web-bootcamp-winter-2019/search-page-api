export function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('q', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

export function readFromQuery(hash) {
    if(!hash){
        return;
    }
    const searchParams = new URLSearchParams(hash);
    const queryOptions = {
        q: searchParams.get('q'),
        page: searchParams.get('page')
    };
    return queryOptions;
}

export function writePageToQuery(existingQuery, pageNumber) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', pageNumber);
    return searchParams.toString();
}

