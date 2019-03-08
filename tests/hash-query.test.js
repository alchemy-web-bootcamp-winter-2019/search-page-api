const test = QUnit.test;

QUnit.module('Hash Query');

import { writeSearchToQuery } from '../src/hash-query.js';

test('adding search to empty hash', assert => {
    //arrange
    const existingQuery = '';
    const searchTerm = 'human';

    //act
    const results = writeSearchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(results, 'searchTerm=human&page=1');
});

test('updating search with new term', assert => {
    //arrange
    const existingQuery = 'searchTerm=human&page=1';
    const searchTerm = 'alien';
    
    //act
    const results = writeSearchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(results, 'searchTerm=alien&page=1');
});
    
import { updatePageQuery } from '../src/hash-query.js';

test('changing page number without changing search term', assert => {
    //arrange
    const page = 3; 
    const existingQuery = 'searchTerm=human&page=1';

    //act
    const results = updatePageQuery(existingQuery, page);
    //assert
    assert.equal(results, 'searchTerm=human&page=3');
});

import { readFromQuery } from '../src/hash-query.js';

test('read options from query', assert => {
    //arrange
    const query = 'searchTerm=human&page=3';
    
    const expected = {
        searchTerm: 'human',
        page: 3
    };
    //act
    const results = readFromQuery(query);
    //assert
    assert.deepEqual(results, expected);
});

test('if query has no page return 1', assert => {
    //arrange
    const query = 'searchTerm=human';
    
    const expected = {
        searchTerm: 'human',
        page: 1
    };
    //act
    const results = readFromQuery(query);
    //assert
    assert.deepEqual(results, expected);
    
});


