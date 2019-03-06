import { createCatTemplateFunction } from '../src/create-cat-component.js';

const test = QUnit.test;

QUnit.module('CREATE TEMPLATE TEST');

test('create cat template function', assert => {
    // arrange
    const catObject = {
        url: 'https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/549585-istock-909106260.jpg?itok=ds7LqH1N&resize=1100x1100',
    };

    const expected = `
        <li>
            <h2>Random Cat</h2>
            <img src="https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/549585-istock-909106260.jpg?itok=ds7LqH1N&amp;resize=1100x1100">
        </li>
    `;
    // act
    const result = createCatTemplateFunction(catObject);
    // assert
    assert.htmlEqual(result, expected);
});