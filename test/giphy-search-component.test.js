const test = QUnit.test;

QUnit.module('Testing Search Component');

function searchToHash(existing, searchTerm) {
    const searchParams = new URLSearchParams(existing);
    searchParams.set('limit', 5);
    searchParams.set('q', searchTerm);
    
    return searchParams.toString();
}

test('returns url hash that matches search when existing is empty', assert => {
    //Arrange
    const expected = 'limit=5&q=ryan+gosling';
    const existing = '';
    const searchTerm = 'ryan gosling';
    //Act
    const result = searchToHash(existing, searchTerm);
    //Assert
    assert.equal(result, expected);
});

test('returns url hash that matches search when existing has content', assert => {
    //Arrange
    const expected = 'limit=5&q=bill+cosby';
    const existing = 'limit=5&q=ryan+gosling';
    const searchTerm = 'bill cosby';
    //Act
    const result = searchToHash(existing, searchTerm);
    //Assert
    assert.equal(result, expected);
}); 