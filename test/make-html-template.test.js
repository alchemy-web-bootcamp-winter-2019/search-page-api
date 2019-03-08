const test = QUnit.test;
import makeHtmlTemplate from '../src/make-html-template.js';

QUnit.module('Make HTML Template');

test('does the hardcoded movie container html match the dynamically created html', assert => {
    //arrange
    const character = {
        'id': 361,
        'name': 'Toxic Rick',
        'status': 'Dead',
        'species': 'Humanoid',
        'type': 'Rick\'s Toxic Side',
        'gender': 'Male',
        'image': 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
    };

    const expected = `
    <div class="character-container">
        <h3 class="character-info">Toxic Rick</h3>
        <img src="https://rickandmortyapi.com/api/character/avatar/361.jpeg" alt="Toxic Rick" class="character-info">
        <p class="character-info">Status: Dead</p>
        <p class="character-info">Species: Humanoid</p>
    </div>
    `;
    //act
    const results = makeHtmlTemplate(character);
    //assert
    assert.htmlEqual(results, expected);
});