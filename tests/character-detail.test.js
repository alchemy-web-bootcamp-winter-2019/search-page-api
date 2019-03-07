const test = QUnit.test;

QUnit.module('character detail');

function makeCharacterDetailTemplate(character) {
    const template = document.createElement('template');
    template.innerHTML = `
        <div>
            <img src="${character.image}">
            <dt>Status:</dt>
            <dd id="status">${character.status}</dd>
            <dt>Species:</dt>
            <dd>${character.species}</dd>
            <dt>Type:</dt>
            <dd>${character.type}</dd>
            <dt>Gender:</dt>
            <dd>${character.gender}</dd>
            <dt>Origin:</dt>
            <dd>${character.origin.name}</dd>
            <dt>Location:</dt>
            <dd>${character.location.name}</dd>
        </div>
    `;

    return template.content;
}

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