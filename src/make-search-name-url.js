const baseURL = 'https://api.magicthegathering.io/v1/cards';

export default function makeSearchNameURL(searchOptions) {
    if(!searchOptions.name) {
        return '';
    }
    const url = new URL(baseURL);
    url.searchParams.set('name', searchOptions.name);
    if(searchOptions.colors.length > 0) {
        url.searchParams.set('colors', searchOptions.colors);
    }
    url.searchParams.set('page', searchOptions.page);
    return url.toString();
}