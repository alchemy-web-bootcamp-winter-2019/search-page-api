import { getIdFromQuery } from '../src/character-detail-template.js';

const test = QUnit.test;

QUnit.module('get id from query');

test('returns character id', assert => {
    const query = '?id=361';
    const expected = '361';
    const result = getIdFromQuery(query);

    assert.equal(result, expected);
});