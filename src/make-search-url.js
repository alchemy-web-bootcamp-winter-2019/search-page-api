const searchUrl = `https://cors-anywhere.herokuapp.com/https://api.ravelry.com/patterns/search.json`;

export default function makeSearchUrl(searchOptions) {
    
    const searchTerm = searchOptions.search.query;

    if(!searchTerm) {
        return '';
    }
    
    const url = new URL(searchUrl);
    console.log(url);
    url.searchParams.set('query', searchTerm);
    return url.toString();
}