const catGalleryNode = document.getElementById('cat-gallery');

export function createCatTemplateFunction(catObject) {
    const html = `
        <li>
            <h2>Random Cat</h2>
            <img src="${catObject.url}">
        </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export default function loadCats(catsObject) {
    catsObject.forEach(catObject => {
        const dom = createCatTemplateFunction(catObject);
        catGalleryNode.appendChild(dom);
    });
}

// 1. --- clearCats function => while(){.remove();}

// 2. --- makeSearch function -> needs testing