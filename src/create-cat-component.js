const catGalleryNode = document.getElementById('cat-gallery');

export function createCatTemplateFunction(catObject) {
    const html = `
        <li>
            <img src="${catObject.url}">
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadCats(catsObject) {
    while(catGalleryNode.children.length > 0) {
        catGalleryNode.firstElementChild.remove();
    }
    catsObject.forEach(catObject => {
        const dom = createCatTemplateFunction(catObject);
        catGalleryNode.appendChild(dom);
    });
}