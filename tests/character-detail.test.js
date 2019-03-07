import makeCharacterDetailTemplate from '../src/character-detail-template.js';

const test = QUnit.test;

QUnit.module('character detail');

test('make character detail page html', assert => {

    const character = {
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

    const expected = `
        <div>
            <img src="https://rickandmortyapi.com/api/character/avatar/361.jpeg">
            <dt>Status:</dt>
            <dd id="status">Dead</dd>
            <dt>Species:</dt>
            <dd>Humanoid</dd>
            <dt>Type:</dt>
            <dd>Rick's Toxic Side</dd>
            <dt>Gender:</dt>
            <dd>Male</dd>
            <dt>Origin:</dt>
            <dd>Alien Spa</dd>
            <dt>Location:</dt>
            <dd>Earth</dd>
        </div>
    `;

    const result = makeCharacterDetailTemplate(character);

    assert.htmlEqual(result, expected);

});