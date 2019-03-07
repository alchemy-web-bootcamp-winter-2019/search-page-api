import writeOptionsAsQuery from '../src/write-options-query.js';

const test = QUnit.test;

QUnit.module('search options to hash tests');

test('makes query in URL to be the search term', assert => {
    //arrange
    const searchOptions = {
        term: 'ding dong',
    };

    //act
    const query = writeOptionsAsQuery(searchOptions);

    //assert
    assert.equal(query, '?query=ding+dong');
});

test('makes query in URL to be the search term plus paging', assert => {
    //arrange
    const searchOptions = {
        term: 'ding dong',
    };

    const pagingOptions = {
        page: 1
    };

    //act
    const query = writeOptionsAsQuery(searchOptions, pagingOptions);

    //assert
    assert.equal(query, '?query=ding+dong&page=1');
});