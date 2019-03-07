const test = QUnit.test;

QUnit.module('Make URL given search options');

const baseURL = 'https://api.magicthegathering.io/v1/cards';
function makeSearchNameURL(searchOptions) {
    const url = new URL(baseURL);
    url.searchParams.set('name', searchOptions.name);
    url.searchParams.set('page', searchOptions.page);
    return url;
}

test('given name and page return URL for fetch', assert => {
    // arrange
    const expected = 'https://api.magicthegathering.io/v1/cards?name=goblin+king&page=1';
    const searchOptions = {
        name: 'goblin king',
        page: 1
    };
    // act
    const result = makeSearchNameURL(searchOptions); 
    // assert
    assert.equal(result, expected);
});