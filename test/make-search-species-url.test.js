import makeSearchSpeciesUrl from '../src/make-search-species-url.js';
const test = QUnit.test;
QUnit.module('MAKE SEARCH SPECIES URL');

test('Update char url based on search', assert => {
    // arrange
    const expected = 'https://rickandmortyapi.com/api/character/?species=human&page=1';
    const queryOptions = {
        species: 'human',
        page: 1
    };

    // act
    const result = makeSearchSpeciesUrl(queryOptions);
    // assert
    assert.equal(result, expected);
});