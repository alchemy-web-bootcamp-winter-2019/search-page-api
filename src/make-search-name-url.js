const baseURL = 'https://api.magicthegathering.io/v1/cards';

export default function makeSearchNameURL(searchOptions) {
    const url = new URL(baseURL);
    url.searchParams.set('name', searchOptions.name);
    url.searchParams.set('page', searchOptions.page);
    return url;
}