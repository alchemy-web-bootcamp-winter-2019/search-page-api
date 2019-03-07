const test = QUnit.test;
QUnit.module('SET URL QUERY');

function writeSearchToQuery(existingQuery, species) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('species', species);

    return searchParams.toString();
}

test('add search to empty query', assert => {
    // arrange
    const existingQuery = '';
    const species = 'human';

    // act
    const query = writeSearchToQuery(existingQuery, species);

    // assert
    assert.equal(query, 'species=human');
});