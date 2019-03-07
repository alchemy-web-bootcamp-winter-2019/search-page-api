const test = QUnit.test;

QUnit.module('hash query functionality');

function writeSearchToQuery(existingQuery, searchTerm) {
    const url = new URLSearchParams(existingQuery);
    url.set('searchTerm', searchTerm);
    url.set('page', 1);
    return url.toString();
}

test('no existing query', function(assert) {
    // Arrange
    const queryOptions = {
        searchTerm: 'obama',
        page: 1
    };

    const expected = 'searchTerm=obama&page=1';
    const existingQuery = '';
    // Act
    const result = writeSearchToQuery(existingQuery, queryOptions.searchTerm);

    // Assert
    assert.equal(result, expected);
});

test('overwrite existing query', assert => {
// Arrange
    const queryOptions = {
        searchTerm: 'hillary clinton',
        page: 1
    };
    const existingQuery = 'searchTerm=obama&page=1';
    const expected = 'searchTerm=hillary+clinton&page=1';
// Act
    const result = writeSearchToQuery(existingQuery, queryOptions.searchTerm);

// Assert
    assert.equal(result, expected);
});

function writePageToQuery(existingQuery, page) {
    const url = new URLSearchParams(existingQuery);
    url.set('page', page);
    return url.toString();
}

test('new page', assert => {
    // Arrange
    const queryOptions = {
        searchTerm: 'hillary clinton',
        page: 3
    };
    const existingQuery = 'searchTerm=hillary+clinton&page=1';
    const expected = 'searchTerm=hillary+clinton&page=3';
    // Act
    const result = writePageToQuery(existingQuery, queryOptions.page);
    // Assert
    assert.equal(result, expected);
});

function readFromQuery(existingQuery) {
    const url = new URLSearchParams(existingQuery);
    const queryOptions = {
        searchTerm: url.get('searchTerm'),
        page: Number(url.get('page'))
    };

    return queryOptions;
}


test('make queryOptions object', assert => {
    // Arrange
    const expected = {
        searchTerm: 'hillary clinton',
        page: 2
    };
    const existingQuery = 'searchTerm=hillary+clinton&page=2';
    // Act
    const result = readFromQuery(existingQuery);
    // Assert
    assert.deepEqual(result, expected);
});