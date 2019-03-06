const test = QUnit.test;

QUnit.module(' test url search params');

function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('name', searchTerm);
    searchParams.set('page', 1);

    return searchParams.toString();
}


test('add search params to empty query', assert => {
    const existingQuery = '';
    const searchTerm = 'rick';

    const expected = 'name=rick&page=1';

    const result = writeSearchToQuery(existingQuery, searchTerm);

    assert.equal(result, expected);
});


// const existingQuery = '';
// const searchTerm = 'star wars';
// // act
// const result = writeSearchToQuery(existingQuery, searchTerm);
// // assert
// assert.equal(result, 'searchTerm=star+wars&page=1');