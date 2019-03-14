export default function makeSearchSpeciesUrl(queryOptions) {
    const SEARCH_SPECIES_URL = 'https://rickandmortyapi.com/api/character/';
    
    if(!queryOptions) {
        return SEARCH_SPECIES_URL;
    }
    else {
        const url = new URL(SEARCH_SPECIES_URL);
        if(queryOptions.species) {
            url.searchParams.set('species', queryOptions.species);
        }
        if(queryOptions.name) {
            url.searchParams.set('name', queryOptions.name);
        }
        url.searchParams.set('page', queryOptions.page);
        // if(queryOptions.status) {
        //     url.searchParams.set('status', queryOptions.status);
        // }
        return url.toString();
    }   
}