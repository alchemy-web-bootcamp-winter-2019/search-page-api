import makeSearchUrl from '../src/make-search-url.js';

const test = QUnit.test;

QUnit.module('test makeSearchUrl');

test('makeSearchUrl returns valid search URL', assert => {
    const queryOptions = {
        name: 'morty', 
        page: 3
    };
    const expected = 'https://rickandmortyapi.com/api/character/?name=morty&page=3';

    const result = makeSearchUrl(queryOptions);

    assert.equal(result, expected);
});