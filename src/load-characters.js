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