export default function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);

    searchParams.set('query', searchTerm);
    return searchParams.toString();
}