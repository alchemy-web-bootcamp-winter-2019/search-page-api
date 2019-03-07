import makeSearchUrl from '../src/make-search-url.js';

const test = QUnit.test;

QUnit.module('search tests');



test('url includes encoded search term from input', assert => {
    //arrange
    const searchOptions = {
        term: 'ding dong'
    };
    //act
    const url = makeSearchUrl(searchOptions);
    //assert
    assert.equal(url, `https://cors-anywhere.herokuapp.com/https://api.ravelry.com/patterns/search.json?query=ding%20dong`);

});