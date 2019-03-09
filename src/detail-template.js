
export function makeRecipeDetailTemplate(recipe){
    const ingredientsArray = recipe.hits[0].recipe.ingredients;
    let foodString = '';

    ingredientsArray.forEach(foodObject => {
        foodString = foodString + foodObject.food + ', ' ;
    });

    foodString = foodString.slice(0, foodString.length - 2);

    const pathing = recipe.hits[0].recipe;

    const html = /*html*/`
    <div>
      <span class="make-row">
        <dt>Recipe Name</dt>      
        <dd>${pathing.label}</dd>
      </span>
      <span class="make-row">
        <dt>Ingredients</dt>
        <dd>${foodString}</dd>
      </span>
      <span class="make-row">
        <dt>Recipe Link</dt>
        <dd><a href="${pathing.url}">How to make ${pathing.label}</a></dd>
      </span>
    </div>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    const dom = template.content;
    return dom;

}

const detailsContainer = document.getElementById('detail-container');

export default function loadDetails(recipe) {
    const dom = makeRecipeDetailTemplate(recipe);
    detailsContainer.appendChild(dom);
}
