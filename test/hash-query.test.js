const test = QUnit.test;

QUnit.module('Make hash from search');

function writeSearchToQuery(existingQuery, search) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('name', search);
    searchParams.set('page', 1);
    return searchParams;
}

test('Make hash from search term', assert => {
    // arrange
    const search = 'goblin';
    const existingQuery = '';
    const expected = 'name=goblin&page=1';
    // act
    const result = writeSearchToQuery(existingQuery, search);
    // assert
    assert.equal(result, expected);
});