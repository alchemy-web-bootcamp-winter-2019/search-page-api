export function writePageToQuery(existingQuery) {
    const pageParams = new URLSearchParams(existingQuery); 
    pageParams.set('page', 5);
    return pageParams.toString();
}

export function writeLimitToQuery(existingQuery) {
    const limitParams = new URLSearchParams(existingQuery);
    limitParams.set('limit', 10);
    return limitParams.toString();
}