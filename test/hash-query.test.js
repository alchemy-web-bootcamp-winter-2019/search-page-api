import { writeSearchToQuery, writePageToQuery, readFromQuery } from '../src/hash-query.js';
const test = QUnit.test;

QUnit.module('hash query functionality');

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