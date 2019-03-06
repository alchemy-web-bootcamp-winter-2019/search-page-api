const test = QUnit.test;

QUnit.module('make template literal');

function makeTemplate() {
    const html = /*html*/`
    <li>
        <p>An 'extremely credible source' has called my office and told me that Barack Obama's birth certificate is a fraud.</p>
        <h2>August 6, 2012</h2>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

test('create html template', assert => {
    // Arrange
    const expected = /*html*/`
    <li>
        <p>An 'extremely credible source' has called my office and told me that Barack Obama's birth certificate is a fraud.</p>
        <h2>August 6, 2012</h2>
    </li>
    `;

    // Act
    const result = makeTemplate();

    // Assert
    assert.htmlEqual(result, expected);
});