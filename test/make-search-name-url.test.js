import makeSearchNameURL from '../src/make-search-name-url.js';

const test = QUnit.test;

QUnit.module('Make URL given search options');

test('given name and page return URL for fetch', assert => {
    // arrange
    const expected = 'https://api.magicthegathering.io/v1/cards?name=goblin+king&page=1';
    const searchOptions = {
        name: 'goblin king',
        colors: [],
        page: 1
    };
    // act
    const result = makeSearchNameURL(searchOptions); 
    // assert
    assert.equal(result, expected);
});

test('if no search option, return empty string', assert => {
    // arrange
    const expected = '';
    const searchOptions = {
        name: '',
        colors: [],
        page: 1
    };
    // act
    const result = makeSearchNameURL(searchOptions); 
    // assert
    assert.equal(result, expected);
});