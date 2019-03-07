export function searchToHash(existing, searchTerm) {
    const searchParams = new URLSearchParams(existing);
    searchParams.set('limit', 20);
    searchParams.set('q', searchTerm);
    
    return searchParams.toString();
}

export function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const limit = parseInt(searchParams.get('limit'));
    const q = searchParams.get('q');
    const offset = parseInt(searchParams.get('offset'));
    const queryOptions = {
        limit: limit,
        searchTerm: q,
        offset: offset
    };

    return queryOptions;
}