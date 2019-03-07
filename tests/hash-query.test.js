import { writeSearchToQuery } from '../src/hash-query.js';

const test = QUnit.test;

QUnit.module(' test url search params');

test('add search params to empty query', assert => {
    const existingQuery = '';
    const searchTerm = 'rick';

    const expected = 'name=rick&page=1';

    const result = writeSearchToQuery(existingQuery, searchTerm);

    assert.equal(result, expected);
});

test('add search params to existing query', assert => {
    const existingQuery = 'name=morty&page=1';
    const searchTerm = 'rick';

    const expected = 'name=rick&page=1';

    const result = writeSearchToQuery(existingQuery, searchTerm);

    assert.equal(result, expected);
});