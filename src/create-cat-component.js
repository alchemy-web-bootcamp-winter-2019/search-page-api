export function createCatTemplateFunction(catObject) {
    const html = `
        <li>
            <h2>${catObject.title}</h2>
            <img src="${catObject.img}">
            <h2>Breed: ${catObject.breed}</h2>
            <p>${catObject.description}</p>
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}