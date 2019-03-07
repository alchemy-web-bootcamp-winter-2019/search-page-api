import { writeSearchToQuery, writePageToQuery, readFromQuery } from '../src/hash-query.js';

const test = QUnit.test;

QUnit.module(' test url search params');

test('add search params to empty query', assert => {
    const existingQuery = '';
    const searchTerm = { 
        name: 'rick',
        gender: ''
    };

    const expected = 'name=rick&gender=&page=1';

    const result = writeSearchToQuery(existingQuery, searchTerm);

    assert.equal(result, expected);
});

test('add search params to existing query', assert => {
    const existingQuery = 'name=morty&gender=femalepage=1';
    const searchTerm = { 
        name: 'rick',
        gender: 'male'
    };

    const expected = 'name=rick&gender=male&page=1';

    const result = writeSearchToQuery(existingQuery, searchTerm);

    assert.equal(result, expected);
});

QUnit.module('change page');

test('write page to existing query', assert => {
    const existingQuery = 'name=morty&page=1';
    const page = 2;

    const expected = 'name=morty&page=2';

    const result = writePageToQuery(existingQuery, page);

    assert.equal(result, expected);
});

QUnit.module('read query');

test('read search options from query', assert => {
    const existingQuery = 'name=morty&gender=unknown&page=1';
    const expected = {
        name: 'morty',
        gender: 'unknown',
        page: 1
    };

    const result = readFromQuery(existingQuery);

    assert.deepEqual(result, expected);
});
