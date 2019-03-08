import makeSearchUrl from '../src/make-search-url.js';
const test = QUnit.test;

QUnit.module(' Module name');


test('Test name', assert => {
    // Arrange
    const expected = 'https://cors-anywhere.herokuapp.com/https://api.tronalddump.io/search/quote?query=obama&page=1&size=9';
    const queryOptions = {
        searchTerm: 'obama',
        page: 1
    };
    // Act
    const result = makeSearchUrl(queryOptions);

    // Assert
    assert.equal(result, expected);
});

test('return empty string when no search prompted', assert => {
    // Arrange
    const expected = '';
    const queryOptions = {
        searchTerm: '',
        page: 1
    };
    // Act
    const result = makeSearchUrl(queryOptions);

    // Assert
    assert.equal(result, expected);
});