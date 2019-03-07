const test = QUnit.test;

QUnit.module('Hash Query');

function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

test('adding search to empty hash', assert => {
    //arrange
    const existingQuery = '';
    const searchTerm = 'human';

    //act
    const results = writeSearchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(results, 'searchTerm=human&page=1');
})