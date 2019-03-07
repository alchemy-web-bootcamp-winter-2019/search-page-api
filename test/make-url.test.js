import { makeURL } from '../src/make-url.js';
const test = QUnit.test;

QUnit.module('making our url');
 

test('create API url when passed queryOptions', assert => {
    //Arrange
    const expected = 'http://api.giphy.com/v1/gifs/search?api_key=kk0i6M6rAbhZ9kP6R0MGVoAUafZgC5rI&limit=5&q=ryan+gosling';
    const queryOptions = {
        limit: 5,
        searchTerm: 'ryan gosling'
    };
    //Act
    const result = makeURL(queryOptions);
    //Assert
    assert.equal(result, expected);
});