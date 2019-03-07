import { writeSearchToQuery, writePageToQuery, readFromQuery } from '../src/hash-query.js';

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

test('write page to existing query', assert => {
    const existingQuery = 'name=morty&page=1';
    const page = 2;

    const expected = 'name=morty&page=2';

    const result = writePageToQuery(existingQuery, page);

    assert.equal(result, expected);
});

QUnit.module('read query');

test('read search options from query', assert => {
    const existingQuery = 'name=morty&page=1';
    const expected = {
        name: 'morty',
        page: 1
    };

    const result = readFromQuery(existingQuery);

    assert.deepEqual(result, expected);
});




// test('reads options from query', assert => {
//     // arrange
//     const query = 'searchTerm=star+wars&page=3';
//     const expected = {
//         searchTerm: 'star wars',
//         page: 3
//     };
//     // act
//     const result = readFromQuery(query);
//     // assert
//     assert.deepEqual(result, expected);
// });