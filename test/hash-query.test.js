const test = QUnit.test;

QUnit.module('hash');

// writeSearchToQuery
import { writeSearchToQuery } from '../src/hash-query.js';

test('add search to hash', assert => {
    // arrange
    const existingQuery = '';
    const searchTerm = 'rick';
    // act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(result, 'searchTerm=rick&page=1');
});

test('change existing search', assert => {
    // arrange
    const existingQuery = 'searchTerm=rick&page=6';
    const searchTerm = 'morty';
    // act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(result, 'searchTerm=morty&page=1');
});


// writeSearchToQuery
import { writePageToQuery } from '../src/hash-query.js';

test('write page to existing search', assert => {
    // arrange
    const existingQuery = 'searchTerm=rick&page=6';
    const page = 2;
    // act
    const result = writePageToQuery(existingQuery, page);
    // assert
    assert.equal(result, 'searchTerm=rick&page=2');
});


// readFromQuery
import { readFromQuery } from '../src/hash-query.js';

test('read options from query', assert => {
    // arrange
    const query = 'searchTerm=rick&page=6';
    // act
    const expected = { searchTerm: 'rick', page: 6 };
    const result = readFromQuery(query);
    // assert
    assert.deepEqual(result, expected);
});

test('go to page one if not defined', assert => {
    // arrange
    const query = 'searchTerm=rick';
    // act
    const expected = { searchTerm: 'rick', page: 1 };
    const result = readFromQuery(query);
    // assert
    assert.deepEqual(result, expected);
});