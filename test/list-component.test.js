const test = QUnit.test;

QUnit.module('Create list');

function makeCardTemplate() {
    return /*html*/ `
        <li>
            <h2>Goblin Spymaster</h2>
            <p>Mana Cost: {2}{R}</p>
            <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420636&type=card" alt="Image of Goblin Spymaster">
            <p>Card text: First strike\nAt the beginning of each opponent's end step, that player creates a 1/1 red Goblin creature token with \"Creatures you control attack each combat if able.\"</p>
            <p class="pt">P/T 2/1</p>
        </li>
    `;
}

test('create card template', assert => {
    // arrange
    const expected = /*html*/ `
        <li>
            <h2>Goblin Spymaster</h2>
            <p>Mana Cost: {2}{R}</p>
            <img src="http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=420636&type=card" alt="Image of Goblin Spymaster">
            <p>Card text: First strike\nAt the beginning of each opponent's end step, that player creates a 1/1 red Goblin creature token with \"Creatures you control attack each combat if able.\"</p>
            <p class="pt">P/T 2/1</p>
        </li>
    `;
    // act
    const result = makeCardTemplate();
    // assert
    assert.equal(result, expected);

});