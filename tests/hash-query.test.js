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

QUnit.module('change page');

function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);

    return searchParams.toString();
}

test('write page to existing query', assert => {
    const existingQuery = 'name=morty&page=1';
    const page = 2;

    const expected = 'name=morty&page=2';

    const result = writePageToQuery(existingQuery, page);

    assert.equal(result, expected);
});