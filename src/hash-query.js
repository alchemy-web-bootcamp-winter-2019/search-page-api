export function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('name', searchTerm.name || '');
    searchParams.set('gender', searchTerm.gender || '');
    searchParams.set('page', 1);

    return searchParams.toString();
}

export function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);

    return searchParams.toString();
}

export function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const result = {
        name: searchParams.get('name') || '',
        gender: searchParams.get('gender') || '',
        page: parseInt(searchParams.get('page')) || 1
    };
    return result;
}
