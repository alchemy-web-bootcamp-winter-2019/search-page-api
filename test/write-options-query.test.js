import writeSearchToQuery from '../src/write-query-options.js';

const test = QUnit.test;


QUnit.module('search options to hash tests');




test('write search to an empty query', assert => {
    //arrange
    const existingQuery = '';
    const searchTerm = 'ding dong';
    //act
    const query = writeSearchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(query, 'query=ding+dong');
});

test('write search to existing query, change search', assert => {
    //arrange
    const existingQuery = 'query=green+elephant';
    const searchTerm = 'ding dong';
    //act
    const query = writeSearchToQuery(existingQuery, searchTerm);
    //assert

    assert.equal(query, 'query=ding+dong');
});
