const test = QUnit.test;

function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

QUnit.module('hash');

test('add search to hash', assert => {
    // arrange
    const existingQuery = '';
    const searchTerm = 'rick';
    // act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(result, 'searchTerm=rick&page=1')
});