const test = QUnit.test;

QUnit.module('url test');


function makeSearchUrlFromQuery(queryOptions) {
    const baseUrl = 'https://rickandmortyapi.com/api/character/';

    if(!queryOptions) {
        return baseUrl;
    }

    const apiURL = new URL(baseUrl);
    apiURL.searchParams.set('name', queryOptions.name);
    apiURL.searchParams.set('status', queryOptions.status);
    apiURL.searchParams.set('species', queryOptions.species);
    apiURL.searchParams.set('page', queryOptions.page);

    return apiURL.toString();
}


test('makes url out of queryhash', assert => {
    //arrange
    const queryOptions = {
        name: 'rick',
        status: 'dead',
        species: 'human',
        page: 1
    };
    const expected = 'https://rickandmortyapi.com/api/character/?name=rick&status=dead&species=human&page=1';
    //act
    const result = makeSearchUrlFromQuery(queryOptions);
    //assert
    assert.deepEqual(result, expected);

});
