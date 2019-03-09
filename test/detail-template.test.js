import recipe from './testData/test-detail-data.js';
import { makeRecipeDetailTemplate } from '../src/detail-template.js';


const test = QUnit.test;

QUnit.module('Detail template tests');


test('dynamically create detail table for recipes', assert => {
    //arrange
    const expected = /*html*/`
    <div>
      <span class="make-row">
        <dt>Recipe Name</dt>      
        <dd>Chicken Vesuvio</dd>
      </span>
      <span class="make-row">
        <dt>Ingredients</dt>
        <dd>olive oil, garlic, russet potatoes, chicken, white wine, chicken stock, parsley, dried oregano, Salt, pepper, frozen peas</dd>
      </span>
      <span class="make-row">
        <dt>Recipe Link</dt>
        <dd><a href="http://www.seriouseats.com/recipes/2011/12/chicken-vesuvio-recipe.html">How to make Chicken Vesuvio</a></dd>
      </span>
    </div>
    `;

    //act
    const result = makeRecipeDetailTemplate(recipe);
    //assert
    assert.htmlEqual(result, expected);
});