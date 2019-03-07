import { writeSearchToQuery, writePageToQuery, readFromQuery } from '../src/hash-query.js';

const test = QUnit.test;

QUnit.module('Make hash from search');

test('Make hash from search term', assert => {
    // arrange
    const search = {
        name: 'goblin',
        colors: []
    };
    const existingQuery = '';
    const expected = 'name=goblin&page=1';
    // act
    const result = writeSearchToQuery(existingQuery, search);
    // assert
    assert.equal(result, expected);
});

test('Overwrite existing query with new search', assert => {
    // arrange
    const search = {
        name: 'cleric',
        colors: []
    };
    const existingQuery = 'name=goblin&page=3';
    const expected = 'name=cleric&page=1';
    // act
    const result = writeSearchToQuery(existingQuery, search);

    // assert
    assert.equal(result, expected);
});

test('search by colors (no name)', assert => {
    const search = {
        name: '',
        colors: ['white', 'blue']
    };
    const existingQuery = '';
    const expected = 'colors=white%2Cblue&page=1';
    const result = writeSearchToQuery(existingQuery, search);
    assert.equal(result, expected);
});

test('search by colors and name', assert => {
    const search = {
        name: 'goblin',
        colors: ['black']
    };
    const existingQuery = 'name=goblin';
    const expected = 'name=goblin&colors=black&page=1';
    const result = writeSearchToQuery(existingQuery, search);
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
        colors: [],
        page: 2
    };
    // act
    const result = readFromQuery(existingQuery);
    // assert
    assert.deepEqual(result, expected);
});

test('Make search options with colors from existing query', assert => {
    // arrange
    const existingQuery = 'name=orc&page=2&colors=red%2Cblack';
    const expected = {
        name: 'orc',
        colors: ['red', 'black'],
        page: 2
    };
    // act
    const result = readFromQuery(existingQuery);
    // assert
    assert.deepEqual(result, expected);
});

test('Make search options with colors and no name from existing query', assert => {
    // arrange
    const existingQuery = 'page=2&colors=red%2Cblack';
    const expected = {
        name: '',
        colors: ['red', 'black'],
        page: 2
    };
    // act
    const result = readFromQuery(existingQuery);
    // assert
    assert.deepEqual(result, expected);
});