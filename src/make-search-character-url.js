
export default function makeSearchCharacterUrl(queryOptions) {
    const SEARCH_CHARACTER_URL = 'https://rickandmortyapi.com/api/character/';

    const url = new URL(SEARCH_CHARACTER_URL);
    url.searchParams.set('name', queryOptions.name);
    url.searchParams.set('status', queryOptions.status);
    url.searchParams.set('species', queryOptions.species);
    return url.toString();
}