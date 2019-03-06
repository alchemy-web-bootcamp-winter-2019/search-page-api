const test = QUnit.test;

QUnit.module('template');

function makeCharacterTemplate(character) {
    const template = document.createElement('template');
    template.innerHTML = `
        <div class="character">
            <h3>${character.name}</h3>
            <img src="${character.image}" alt="character image">
            <h4>Status: ${character.status}</h4>
        </div>
    `;
    return template.content;
}

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

test('make character template', assert => {
    const expected = `
        <div class="character">
            <h3>Toxic Rick</h3>
            <img src="https://rickandmortyapi.com/api/character/avatar/361.jpeg" alt="character image">
            <h4>Status: Dead</h4>
        </div>
    `;

    const result = makeCharacterTemplate(character);

    assert.htmlEqual(result, expected);
});