import { makeSearchArticlesURL } from '../src/make-search-api-url.js';
const test = QUnit.test;

test('includes searchTerm and page in search movie url', assert => {
    //arange
    const queryOptions = {
        q: 'bitcoin',
        page: 2
    };

    const expected = 'https://newsapi.org/v2/everything?q=bitcoin&apiKey=48464c7f112d4fc4a5047ae304c56c1d&page=2&language=en';
    //act
    const result = makeSearchArticlesURL(queryOptions);
    //assert
    assert.equal(result, expected);
});