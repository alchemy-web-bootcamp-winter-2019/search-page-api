const BASE_URL = 'http://api.giphy.com/v1/gifs/search?';
const API_KEY = 'kk0i6M6rAbhZ9kP6R0MGVoAUafZgC5rI';

export function makeURL(queryOptions) {
    const newUrl = new URL(BASE_URL);
    newUrl.searchParams.set('api_key', API_KEY);
    newUrl.searchParams.set('limit', queryOptions.limit);
    newUrl.searchParams.set('q', queryOptions.searchTerm);
    newUrl.searchParams.set('offset', queryOptions.offset);
    return newUrl.toString();
}   