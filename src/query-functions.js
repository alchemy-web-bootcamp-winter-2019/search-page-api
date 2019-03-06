export function searchToHash(existing, searchTerm) {
    const searchParams = new URLSearchParams(existing);
    searchParams.set('limit', 5);
    searchParams.set('q', searchTerm);
    
    return searchParams.toString();
}

export function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const limit = parseInt(searchParams.get('limit'));
    const q = searchParams.get('q');
    const queryOptions = {
        limit: limit,
        searchTerm: q
    };

    return queryOptions;
}