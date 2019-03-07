const test = QUnit.test;

QUnit.module('Hash Query');

function writeSearchToQuery(existingQuery, searchTerm) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('searchTerm', searchTerm);
    searchParams.set('page', 1);
    return searchParams.toString();
}

test('adding search to empty hash', assert => {
    //arrange
    const existingQuery = '';
    const searchTerm = 'human';

    //act
    const results = writeSearchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(results, 'searchTerm=human&page=1');
});

test('updating search with new term', assert => {
    //arrange
    const existingQuery = 'searchTerm=human&page=1';
    const searchTerm = 'alien';
    
    //act
    const results = writeSearchToQuery(existingQuery, searchTerm);
    //assert
    assert.equal(results, 'searchTerm=alien&page=1');
});
    

function updatePageQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

test('changing page number without changing search term', assert => {
    //arrange
    const page = 3; 
    const existingQuery = 'searchTerm=human&page=1';

    //act
    const results = updatePageQuery(existingQuery, page);
    //assert
    assert.equal(results, 'searchTerm=human&page=3');
});

function readFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const pageNumber = parseInt(searchParams.get('page') || 1);
    const results = {
        searchTerm: searchParams.get('searchTerm'),
        page: pageNumber
    };
    return results;
}

test('read options from query', assert => {
    //arrange
    const query = 'searchTerm=human&page=3';
    
    const expected = {
        searchTerm: 'human',
        page: 3
    };
    //act
    const results = readFromQuery(query);
    //assert
    assert.deepEqual(results, expected);
});

test('if query has no page return 1', assert => {
    //arrange
    const query = 'searchTerm=human';
    
    const expected = {
        searchTerm: 'human',
        page: 1
    };
    //act
    const results = readFromQuery(query);
    //assert
    assert.deepEqual(results, expected);
    
});


