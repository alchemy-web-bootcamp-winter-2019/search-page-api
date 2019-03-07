const test = QUnit.test;

QUnit.module(' Module name');

function makeSearchUrl(queryOptions) {
    const API_URL = 'https://api.tronalddump.io/search/quote?';

    const url = new URL(API_URL);
    url.searchParams.set('query', queryOptions.searchTerm);
    url.searchParams.set('page', queryOptions.page);
    url.searchParams.set('size', 9);

    return url.toString();
}

test('Test name', assert => {
    // Arrange
    const expected = 'https://api.tronalddump.io/search/quote?query=obama&page=1&size=9';
    const queryOptions = {
        searchTerm: 'obama',
        page: 1
    };
    // Act
    const result = makeSearchUrl(queryOptions);

    // Assert
    assert.equal(result, expected);
});