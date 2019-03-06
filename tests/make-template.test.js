const test = QUnit.test;

QUnit.module('html');

import makeHtmlTemplate from '../src/character-component.js';

test('test to for function of html template', assert => {
    // arrange
    const characterInformation = {
        'id': 361,
        'name': 'Toxic Rick',
        'status': 'Dead',
        'species': 'Humanoid',
        'type': 'Rick\'s Toxic Side',
        'gender': 'Male',
        'origin': {
            'name': 'Alien Spa',
            'url': 'https://rickandmortyapi.com/api/location/64'
        },
        'location': {
            'name': 'Earth',
            'url': 'https://rickandmortyapi.com/api/location/20'
        },
        'image': 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
        'episode': [
            'https://rickandmortyapi.com/api/episode/27'
        ],
        'url': 'https://rickandmortyapi.com/api/character/361',
        'created': '2018-01-10T18:20:41.703Z'
    };

    // act
    const result = makeHtmlTemplate(characterInformation);

    // assert
    assert.htmlEqual(result, `
    <div class="character-div">
        <h3>Toxic Rick</h3>
        <img src="https://rickandmortyapi.com/api/character/avatar/361.jpeg" alt="Toxic Rick" class="character-thumbnail">
        <p>Species: Humanoid</p>
    </div>
    `);

});