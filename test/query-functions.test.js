const test = QUnit.test;

QUnit.module('query function tests');
function writeFilterToQuery(existingQuery, filterOptions) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('name', filterOptions.name);
    searchParams.set('status', filterOptions.status);
    searchParams.set('species', filterOptions.species);
    searchParams.set('page', 1);
    return searchParams.toString();
}

test('creates a query string with the filter name', assert => {
    //arrange
    const existingQuery = '';
    const filterOptions = {
        name: 'Rick',
        status: 'alive',
        species: 'human'
    };

    //act
    const result = writeFilterToQuery(existingQuery, filterOptions);
    const expected = 'name=Rick&status=alive&species=human&page=1';
    //assert
    assert.equal(result, expected);
});
test('creates a query string with the filter name', assert => {
    //arrange
    const existingQuery = 'name=Rick&status=alive&species=human&page=1';
    const filterOptions = {
        name: 'Morty',
        status: 'dead',
        species: 'human'
    };

    //act
    const result = writeFilterToQuery(existingQuery, filterOptions);
    const expected = 'name=Morty&status=dead&species=human&page=1';
    //assert
    assert.equal(result, expected);
});
test('creates a query string with the filter name', assert => {
    //arrange
    const existingQuery = '';
    const filterOptions = {
        name: 'Morty',
        status: '',
        species: ''
    };

    //act
    const result = writeFilterToQuery(existingQuery, filterOptions);
    const expected = 'name=Morty&status=&species=&page=1';
    //assert
    assert.equal(result, expected);
});

function writePageToQuery(existingQuery, page) {
    const searchParams = new URLSearchParams(existingQuery);
    searchParams.set('page', page);
    return searchParams.toString();
}

test('writes page to query', assert => {
    //arrange
    const existingQuery = 'name=Morty&status=dead&species=human&page=1';
    const page = 3;
    //act
    const result = writePageToQuery(existingQuery, page);
    const expected = 'name=Morty&status=dead&species=human&page=3';
    //assert
    

    assert.equal(result, expected);
});

function readFromQuery(queryOptions) {
    const searchParams = new URLSearchParams(queryOptions);
    const filterOptions = {
        name: searchParams.get('name'),
        status: searchParams.get('status'),
        species: searchParams.get('species'),
        page: parseInt(searchParams.get('page'))
    };
    return filterOptions;
}

test('reads filter options', assert => {
    //arrange
    const queryOptions = 'name=Morty&status=dead&species=human&page=1';
    const expected = {
        name: 'Morty',
        status: 'dead',
        species: 'human',
        page: 1
    };
    //act
    const result = readFromQuery(queryOptions);
    //assert
    assert.deepEqual(result, expected);
});
test('reads filter options', assert => {
    //arrange
    const queryOptions = 'name=Morty&status=&species=&page=1';
    const expected = {
        name: 'Morty',
        status: '',
        species: '',
        page: 1
    };
    //act
    const result = readFromQuery(queryOptions);
    //assert
    assert.deepEqual(result, expected);
});