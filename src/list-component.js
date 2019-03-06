export function makeCardTemplate(card) {
    const html = /*html*/ `
        <li>
            <h2>${card.name}</h2>
            <p>Mana Cost: ${card.manaCost}</p>
            <img src="${card.imageUrl}" alt="Image of ${card.name}">
            <p>Card text: ${card.text}"</p>
            <p class="pt">P/T ${card.power}/${card.toughness}</p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}