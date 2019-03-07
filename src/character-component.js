export default function makeHtmlTemplate(characterInformation) {
    const template = document.createElement('template');
    const dom = `
        <div class="character-div">
            <h3>${characterInformation.name}</h3>
        <img src="https://rickandmortyapi.com/api/character/avatar/${characterInformation.id}.jpeg" alt="${characterInformation.name}" class="character-thumbnail">
            <p>Species: ${characterInformation.species}</p>
        </div>
    `;
    template.innerHTML = dom;
    return template.content;
}

const characterList = document.getElementById('character-list');

export function loadCharacters(characters) {
    while(characterList.children.length > 0) {
        characterList.lastElementChild.remove();
    }

    characters.forEach(characterInformation => {
        const dom = makeHtmlTemplate(characterInformation);
        characterList.appendChild(dom);
    });
}