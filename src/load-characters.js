export function makeCharacterTemplate(character) {
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

const characterContainer = document.getElementById('character-container');

export default function loadCharacters(characters) {
    while(characterContainer.children.length > 0) {
        characterContainer.lastElementChild.remove();
    }
    characters.forEach(character => {
        const dom = makeCharacterTemplate(character);
        characterContainer.appendChild(dom);
    });
}

export function noResults() {
    console.log('this is the function');
    while(characterContainer.children.length > 0) {
        characterContainer.lastElementChild.remove();
    }
    const errorMsg = document.createElement('p');
    errorMsg.textContent = 'No Results';
    characterContainer.appendChild(errorMsg);

}