const SEARCH_CHARACTER_URL = 'https://rickandmortyapi.com/api/character/';

export default function searchCharacterUrl(queryOptions) {
    const url = new URL(SEARCH_CHARACTER_URL);
    url.searchParams.set('name', queryOptions.searchTerm);
    url.searchParams.set('page', queryOptions.page);

    const searchTerm = queryOptions.searchTerm;
    if(!searchTerm) {
        return '';
    }

    return url.toString();
}