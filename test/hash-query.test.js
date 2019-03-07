import { searchToURL, pageToURL, queryToObject } from '../src/hash-query.js';
const test = QUnit.test;

test('add search value to empty query in url', assert => {
    const q = 'bitcoin';
    const existingQuery = '';
    const expected = 'q=bitcoin&page=1';

    const result = searchToURL(existingQuery, q);

    assert.equal(result, expected);
});

test('add search value to existing query in url', assert => {
    const q = 'elephant';
    const existingQuery = 'q=bitcoin';
    const expected = 'q=elephant&page=1';
    const result = searchToURL(existingQuery, q);

    assert.equal(result, expected);
});

test('add page number to existing query in url', assert => {
    const newPage = 2;
    const existingQuery = 'q=bitcoin';
    const expected = 'q=bitcoin&page=2';

    const result = pageToURL(existingQuery, newPage);
    assert.equal(result, expected);
});

test('replace page number in URL with new page', assert => {
    const newPage = 5;
    const existingQuery = 'q=bitcoin&page=2';
    const expected = 'q=bitcoin&page=5';
    const result = pageToURL(existingQuery, newPage);

    assert.equal(result, expected);
});

test('get properites from URL query', assert => {
    const existingQuery = 'q=bitcoin&page=5';
    const expected = {
        q: 'bitcoin',
        page: 5
    };

    const result = queryToObject(existingQuery);

    assert.deepEqual(result, expected);
});

