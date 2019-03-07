const test = QUnit.test;
import searchCharacterUrl from '../src/search-character-url.js';

QUnit.module('url');

test('API url has search term and page number', assert => {
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