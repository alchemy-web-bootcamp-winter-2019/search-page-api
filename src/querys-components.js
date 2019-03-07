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

// waaaayyy to far ahead