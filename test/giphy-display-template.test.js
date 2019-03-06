const test = QUnit.test;

QUnit.module('Testing display template');

function makeGiphyTemplate(giphyObject) {
    const html = /*html*/ `<li>
    <img src="${giphyObject.src}" alt="ryan gosling gif">
</li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('create LI template for gifs', assert => {
    //Arrange
    const expected = /*html*/ ` <li>
    <img src="https://media2.giphy.com/media/rwNpHtaMGnStW/100w.gif" alt="ryan gosling gif">
</li>
    `;
    const giphyObject = {
        src: 'https://media2.giphy.com/media/rwNpHtaMGnStW/100w.gif' 
    };
    //Act
    const result = makeGiphyTemplate(giphyObject);
    //Assert
    assert.htmlEqual(result, expected);
});