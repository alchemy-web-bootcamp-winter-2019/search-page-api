export function makeRecipeListTemplate(recipe) {
    const uri = recipe.recipe.uri;
    const indexOfID = uri.indexOf('_');
    const ID = uri.slice(indexOfID + 1);

    const html = `
    <li>
      <img src="${recipe.recipe.image}">
      <a href="recipe-detail.html#${ID}">${recipe.recipe.label}</a>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;
}

const recipeContainer = document.getElementById('recipe-container');

export default function loadRecipes(recipes) {
    while(recipeContainer.children.length > 0) {
        recipeContainer.lastElementChild.remove();
    }

    recipes.hits.forEach(recipe => {
        const dom = makeRecipeListTemplate(recipe);
        recipeContainer.appendChild(dom);
    });
}

