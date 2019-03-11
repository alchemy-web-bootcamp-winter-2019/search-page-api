import { writeSearchToQuery } from '../src/hash-query.js';
import { writePageToQuery } from '../src//hash-query.js';
import { readFromQuery } from '../src/hash-query.js';

const test = QUnit.test;
QUnit.module('SET URL QUERY');

test('Add search to EMPTY query', assert => {
    const expected = 'species=human&page=1';
    const existingQuery = '';
    const species = 'human';

    const result = writeSearchToQuery(existingQuery, species);

    assert.equal(result, expected);
});

test('Add new search to EXISTING query', assert => {
    const expected = 'species=alien&page=1';
    const existingQuery = 'species=human&page=3';
    const species = 'alien';

    const result = writeSearchToQuery(existingQuery, species);
   
    assert.equal(result, expected);
});

test('Write page to EXISTING query', assert => {
    const expected = 'species=human&page=3';
    const page = 3;
    const existingQuery = 'species=human&page=2';

    const result = writePageToQuery(existingQuery, page);

    assert.equal(result, expected);
});

test('read from query', assert => {
    const query = 'species=human&page=1';

    const expected = {
        species: 'human',
        page: 1
    };

    const result = readFromQuery(query);
   
    assert.deepEqual(result, expected);

});