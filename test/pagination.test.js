import { makeURL } from '../src/make-url.js';
import calculatePages from '../src/pagination-component.js';
const test = QUnit.test;

QUnit.module('Testing pagination function');

test('generates new url when page increased from 1 to 2', assert => {
    //Arrange
    const expected = 'http://api.giphy.com/v1/gifs/search?api_key=kk0i6M6rAbhZ9kP6R0MGVoAUafZgC5rI&limit=20&q=ryan+gosling&offset=20';
    const queryOptions = {
        limit: 20,
        searchTerm: 'ryan gosling',
        offset: 20
    };
    //Act
    const result = makeURL(queryOptions);

    //Assert
    assert.equal(result, expected);
});



test('calculates total pages and current page from fetch pagination object', assert => {
    //Arrange
    const expected = {
        currentPage: 4,
        totalPages: 11
    };
    const pageObject = {
        count: 20,
        offset: 66,
        total_count: 213
    };
    //Act
    const result = calculatePages(pageObject);
    
    //Assert
    assert.deepEqual(result, expected);
});