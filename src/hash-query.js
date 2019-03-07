export function searchToURL(existingQuery, q) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('q', q);
    searchParams.set('page', 1);
    return searchParams.toString();
}

export function pageToURL(existingQuery, newPage) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', newPage);
    return searchParams.toString();
}

export function queryToObject(existingQuery) {
    const searchParams = new URLSearchParams(existingQuery);
    const q = searchParams.get('q');
    const page = parseInt(searchParams.get('page'));
    return {
        q: q,
        page: page
    };
}