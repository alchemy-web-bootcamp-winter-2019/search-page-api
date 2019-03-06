export function searchToHash(existing, searchTerm) {
    const searchParams = new URLSearchParams(existing);
    searchParams.set('limit', 5);
    searchParams.set('q', searchTerm);
    
    return searchParams.toString();
}