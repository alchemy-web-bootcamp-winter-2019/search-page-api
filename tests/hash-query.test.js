const test = QUnit.test;

QUnit.module('hash');

// writeSearchToQuery
function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

test('add search to hash', assert => {
    // arrange
    const existingQuery = '';
    const searchTerm = 'rick';
    // act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(result, 'searchTerm=rick&page=1');
});

test('change existing search', assert => {
    // arrange
    const existingQuery = 'searchTerm=rick&page=6';
    const searchTerm = 'morty';
    // act
    const result = writeSearchToQuery(existingQuery, searchTerm);
    // assert
    assert.equal(result, 'searchTerm=morty&page=1');
});


// writeSearchToQuery
function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

test('write page to existing search', assert => {
    // arrange
    const existingQuery = 'searchTerm=rick&page=6';
    const page = 2;
    // act
    const result = writePageToQuery(existingQuery, page);
    // assert
    assert.equal(result, 'searchTerm=rick&page=2');
});


// readFromQuery
function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const result = {
        searchTerm: searchParams.get('searchTerm'),
        page: parseInt(searchParams.get('page')) || 1
    };
    return result;
}

test('read options from query', assert => {
    // arrange
    const query = 'searchTerm=rick&page=6';
    // act
    const expected = { searchTerm: 'rick', page: 6 };
    const result = readFromQuery(query);
    // assert
    assert.deepEqual(result, expected);
});