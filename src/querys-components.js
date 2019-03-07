export function writePageToQuery(existingQuery, page) {
    const pageParams = new URLSearchParams(existingQuery); 
    pageParams.set('page', page);
    return pageParams.toString();
}

export function writeLimitToQuery(existingQuery, limit) {
    const limitParams = new URLSearchParams(existingQuery);
    limitParams.set('limit', limit);
    return limitParams.toString();
}

export function readFromQuery(currentQuery) {
    const searchParams = new URLSearchParams(currentQuery);
    const limit = searchParams.get('limit');
    const page = searchParams.get('page');
    const searchParamsObject = { limit: parseInt(limit), page: parseInt(page) };
    return searchParamsObject;
}

export function makeAPIurl(searchParamsObject) {
    const baseURL = 'https://api.thecatapi.com/v1/images/search?';
    const APIurl = new URL(baseURL);
    APIurl.searchParams.set('limit', searchParamsObject.limit);
    APIurl.searchParams.set('page', searchParamsObject.page);
    return APIurl.toString();
}