const test = QUnit.test;

QUnit.module('making our url');
const BASE_URL = 'http://api.giphy.com/v1/gifs/search?';
const API_KEY = 'kk0i6M6rAbhZ9kP6R0MGVoAUafZgC5rI';

function makeURL(queryOptions) {
    const newUrl = new URL(BASE_URL);
    newUrl.searchParams.set('api_key', API_KEY);
    newUrl.searchParams.set('limit', queryOptions.limit);
    newUrl.searchParams.set('q', queryOptions.searchTerm);
    return newUrl.toString();
}    

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