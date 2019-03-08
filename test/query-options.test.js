import readQueryAsOptions from '../src/read-query-options.js';

const test = QUnit.test;

QUnit.module('query options tests');



test('reads query with query and page', assert => {
    //arrange
    const query = '?query=ding+dong&page=1';

    //act
    const options = readQueryAsOptions(query);
    //assert
    assert.deepEqual(options, {
        search: { query: 'ding dong' },
        paging: { page: 1 }
    });
});


test('reads query with no page', assert => {
    //arrange
    const query = '?query=ding+dong';
    //act
    const options = readQueryAsOptions(query);
    //assert
    assert.deepEqual(options, {
        search: { query: 'ding dong' },
        paging: { page: 1 }
    });
});

test('reads empty query', assert => {
    //arrange
    const query = '';
    //act
    const options = readQueryAsOptions(query);
    //assert
    assert.deepEqual(options, {
        search: { query: '' },
        paging: { page: 1 }
    });
});