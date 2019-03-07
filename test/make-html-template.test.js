const test = QUnit.test;

QUnit.module('Make HTML Template');

function makeHTMLTemplate(character) {
    const template = document.createElement('template');

    template.innerHTML = `
        <div class="character-container">
            <h3 class="character-info">Toxic Rick</h3>
            <img src="https://rickandmortyapi.com/api/character/avatar/361.jpeg" alt="Toxic Rick" class="character-info">
            <p class="character-info">Status: Dead</p>
            <p class="character-info">Species: Humanoid</p>
        </div>
        `;
    
    return template.content;
}

test('does the hardcoded movie container html match the dynamically created html', assert => {
    //arrange
    const character = {
        "id": 361,
        "name": "Toxic Rick",
        "status": "Dead",
        "species": "Humanoid",
        "type": "Rick's Toxic Side",
        "gender": "Male",
        "image": "https://rickandmortyapi.com/api/character/avatar/361.jpeg",
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
    const results = makeHTMLTemplate(character);
    //assert
    assert.htmlEqual(results, expected);
});