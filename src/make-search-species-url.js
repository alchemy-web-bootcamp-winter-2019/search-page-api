export default function makeSearchSpeciesUrl(queryOptions) {
    const SEARCH_SPECIES_URL = 'https://rickandmortyapi.com/api/character/';

    const url = new URL(SEARCH_SPECIES_URL);
    if(queryOptions.species) {
        url.searchParams.set('species', queryOptions.species);
    }
    if(queryOptions.name) {
        url.searchParams.set('name', queryOptions.name);
    }
    url.searchParams.set('page', queryOptions.page);

    return url.toString();
}