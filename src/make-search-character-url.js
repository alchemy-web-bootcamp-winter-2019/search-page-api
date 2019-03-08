const SEARCH_CHARACTER_URL = 'https://rickandmortyapi.com/api/character/';

export default function makeSearchCharacterUrl(queryOptions) {
    const url = new URL(SEARCH_CHARACTER_URL);
    url.searchParams.set('page', queryOptions.page);
    url.searchParams.set('species', queryOptions.searchTerm);

    if(!queryOptions.searchTerm) {
        return '';
    }

    return url.toString();
}