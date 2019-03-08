export default function makeSearchSpeciesUrl(queryOptions) {
    const SEARCH_SPECIES_URL = 'https://rickandmortyapi.com/api/character/';

    const url = new URL(SEARCH_SPECIES_URL);
    url.searchParams.set('species', queryOptions.species);
    url.searchParams.set('page', queryOptions.page);
    return url.toString();
}