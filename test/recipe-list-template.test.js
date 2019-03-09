import { makeRecipeListTemplate } from '../src/recipe-list-template.js';
import recipe from './testData/test-list-data.js';
const test = QUnit.test;

QUnit.module('recipe list tests');

test('Create List Template', assert => {
    //arrange
    const expected = `
    <li>
      <img src="https://www.edamam.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg">
      <a href="recipe-detail.html#b79327d05b8e5b838ad6cfd9576b30b6">Chicken Vesuvio</a>
    </li>
    `;

    //act
    const result = makeRecipeListTemplate(recipe);

    //assert
    assert.htmlEqual(result, expected);
});