export default function makeSearchUrl(queryOptions) {
    if(!queryOptions.searchTerm) {
        return '';
    }
    const API_URL = 'https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/search/quote?';

    const url = new URL(API_URL);
    url.searchParams.set('query', queryOptions.searchTerm);
    url.searchParams.set('page', queryOptions.page);
    url.searchParams.set('size', 9);

    return url.toString();
}
