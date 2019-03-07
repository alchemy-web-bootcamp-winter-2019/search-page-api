const test = QUnit.test;

QUnit.module('hash query functionality');

function writeSearchToQuery(existingQuery, searchTerm) {
    const url = new URLSearchParams(existingQuery);
    url.set('searchTerm', searchTerm);
    url.set('page', 1);
    return url.toString();
}

test('writeSearchToQuery', function(assert) {
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