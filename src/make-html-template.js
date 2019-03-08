export default function makeHtmlTemplate(character) {
    const template = document.createElement('template');

    template.innerHTML = `
        <div class="character-container">
            <h3 class="character-info">${character.name}</h3>
            <img src="${character.image}" alt="${character.name}" class="character-info">
            <p class="character-info">Status: ${character.status}</p>
            <p class="character-info">Species: ${character.species}</p>
        </div>
        `;
    
    return template.content;
}

const characterContainer = document.getElementById('character-list-container');

export function loadCharacter(allCharacters) {
    while(characterContainer.children.length > 0) {
        characterContainer.lastElementChild.remove();
    }
    
    allCharacters.forEach(character => {
        const dom = makeHtmlTemplate(character);
        characterContainer.appendChild(dom);
    });
}