const test = QUnit.test;

QUnit.module('url');

const SEARCH_CHARACTER_URL = 'https://rickandmortyapi.com/api/character/'

function searchCharacterUrl(queryOptions) {
    const url = new URL(SEARCH_CHARACTER_URL);
    url.searchParams.set('name', queryOptions.searchTerm);
    url.searchParams.set('page', queryOptions.page);

    return url.toString();
}

test('url has search term and page number', assert => {
    // arrange
    const queryOptions = { 
        searchTerm: 'rick', 
        page: 1 
    };
    const expected = 'https://rickandmortyapi.com/api/character/?name=rick&page=1';
    // act
    const result = searchCharacterUrl(queryOptions);
    // assert
    assert.equal(result, expected);
});