export default function makeSearchUrl(searchOptions) {
    const query = encodeURIComponent(searchOptions.term);
    const url = `https://cors-anywhere.herokuapp.com/https://api.ravelry.com/patterns/search.json?query=${query}`;
    return url;
}