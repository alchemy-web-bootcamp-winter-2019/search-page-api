export function writeSearchToQuery(existingQuery, searchTerm) {
    const url = new URLSearchParams(existingQuery);
    url.set('searchTerm', searchTerm);
    url.set('page', 1);
    return url.toString();
}

export function writePageToQuery(existingQuery, page) {
    const url = new URLSearchParams(existingQuery);
    url.set('page', page);
    return url.toString();
}

export function updateHashQuery(callback, queryOption){
    const existingQuery = window.location.hash.slice(1);
    const newQuery = callback(existingQuery, queryOption);
    window.location.hash = newQuery;
}

export function readFromQuery(existingQuery) {
    const url = new URLSearchParams(existingQuery);
    const queryOptions = {
        searchTerm: url.get('searchTerm'),
        page: Number(url.get('page'))
    };
    return queryOptions;
}