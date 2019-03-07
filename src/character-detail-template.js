export default function makeCharacterDetailTemplate(character) {
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

export function getIdFromQuery(query) {
    const searchParams = new URLSearchParams(query);
    const result = searchParams.get('id');

    return result;
}