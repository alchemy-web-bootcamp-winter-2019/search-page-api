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

test('Overwrite existing query with new search', assert => {
    // arrange
    const search = 'cleric';
    const existingQuery = 'name=goblin&page=3';
    const expected = 'name=cleric&page=1';
    // act
    const result = writeSearchToQuery(existingQuery, search);

    // assert
    assert.equal(result, expected);
});

function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams;
}

test ('Write page to existing query', assert => {
    // arrange
    const existingQuery = 'name=goblin&page=1';
    const page = 2;
    const expected = 'name=goblin&page=2' 
    // act
    const result = writePageToQuery(existingQuery, page);
    // assert
    assert.equal(result, expected);
});