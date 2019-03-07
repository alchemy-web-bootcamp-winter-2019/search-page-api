import { writeLimitToQuery, writePageToQuery } from '../src/querys-components.js'; 

const test = QUnit.test;

QUnit.module('QUERY TESTING');
// https://api.thecatapi.com/v1/images/search?limit=15&page=5&order=Desc



test('write to page, page 5', assert => {
    //arrange
    const expected = 'page=5';
    const existingQuery = '';
    //act
    const result = writePageToQuery(existingQuery);
    //assert
    assert.equal(result, expected);
});

test('write number of cats limit to query', assert => {
    // arrange
    const expected = 'limit=10';
    const existingQuery = '';
    // act
    const result = writeLimitToQuery(existingQuery);
    //assert
    assert.equal(result, expected);
});