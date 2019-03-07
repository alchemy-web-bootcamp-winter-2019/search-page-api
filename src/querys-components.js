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
    const limit = searchParams.get('limit') ? searchParams.get('limit') : 1;
    const page = searchParams.get('page') ? searchParams.get('page') : 1;
    const searchParamsObject = { limit: parseInt(limit), page: parseInt(page), order: 'Desc' };
    return searchParamsObject;
}

export function makeAPIurl(searchParamsObject) {
    const baseURL = 'https://api.thecatapi.com/v1/images/search?';
    const APIurl = new URL(baseURL);
    APIurl.searchParams.set('limit', searchParamsObject.limit);
    APIurl.searchParams.set('order', searchParamsObject.order);
    APIurl.searchParams.set('page', searchParamsObject.page);
    console.log('fetch url', APIurl.toString());
    return APIurl.toString();
}