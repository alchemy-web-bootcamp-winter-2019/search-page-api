import makeSearchCharacterUrl from '../src/make-search-character-url.js';
const test = QUnit.test;
QUnit.module('MAKE SEARCH CHAR URL');

test('Update char url based on search', assert => {
    // arrange
    const expected = 'https://rickandmortyapi.com/api/character/?name=rick&status=alive&species=human';
    const queryOptions = {
        name: 'rick',
        status: 'alive',
        species: 'human'
    };
    // act
    const result = makeSearchCharacterUrl(queryOptions);
    // assert
    assert.equal(result, expected);
});