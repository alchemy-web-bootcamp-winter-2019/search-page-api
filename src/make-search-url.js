
const SEARCH_URL = 'https://rickandmortyapi.com/api/character/';

export default function makeSearchUrl(queryOptions) {
    // if(!queryOptions.name) {
    //     return '';
    // }
    const url = new URL(SEARCH_URL);
    url.searchParams.set('name', queryOptions.name);
    url.searchParams.set('gender', queryOptions.gender);
    url.searchParams.set('page', queryOptions.page);

    return url.toString();
}