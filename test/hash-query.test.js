import { writeSearchToQuery, writePageToQuery, readFromQuery} from '../src/hash-query.js';

const test = QUnit.test;

QUnit.module('Make hash from search');

test('Make hash from search term', assert => {
    // arrange
    const search = 'goblin';
    const existingQuery = '';
    const expected = 'name=goblin&page=1';
    // act
    const result = writeSearchToQuery(existingQuery, search);
    // assert
    assert.equal(result, expected);
});

test('Overwrite existing query with new search', assert => {
    // arrange
    const search = 'cleric';
    const existingQuery = 'name=goblin&page=3';
    const expected = 'name=cleric&page=1';
    // act
    const result = writeSearchToQuery(existingQuery, search);

    // assert
    assert.equal(result, expected);
});

test('Write page to existing query', assert => {
    // arrange
    const existingQuery = 'name=goblin&page=1';
    const page = 2;
    const expected = 'name=goblin&page=2'; 
    // act
    const result = writePageToQuery(existingQuery, page);
    // assert
    assert.equal(result, expected);
});

test('Make search options from existing query', assert => {
    // arrange
    const existingQuery = 'name=orc&page=2';
    const expected = {
        name: 'orc',
        page: 2
    };
    // act
    const result = readFromQuery(existingQuery);
    // assert
    assert.deepEqual(result, expected);
});