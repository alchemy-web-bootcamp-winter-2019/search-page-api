export function makeCardTemplate(card) {
    const html = /*html*/ `
        <li>
            <h2>${card.name}</h2>
            <p>Mana Cost: ${card.manaCost}</p>
            <img src="${card.imageUrl ? card.imageUrl : './assets/card-back.jpg'}" alt="Image of ${card.name}">
            <p>Card text: ${card.text}"</p>
            <p class="pt">P/T ${card.power}/${card.toughness}</p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const cardList = document.getElementById('card-list');

export default function loadCards(cards) {
    while(cardList.firstChild) {
        cardList.firstChild.remove();
    }
    cards.forEach(card => {
        const dom = makeCardTemplate(card);
        cardList.appendChild(dom);
    });
}