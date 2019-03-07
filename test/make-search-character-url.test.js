const test = QUnit.test;

QUnit.module('make search character url');

import makeSearchCharacterUrl from '../src/make-search-character-url.js';

test('does the hardcoded url match the created url', assert => {
    //arrange
    const queryOptions = {
        searchTerm: 'human',
        page: 3
    };
    //act
    const results = makeSearchCharacterUrl(queryOptions);
    
    //assert
    assert.deepEqual(results, 'https://rickandmortyapi.com/api/character/?page=3&species=human');
})