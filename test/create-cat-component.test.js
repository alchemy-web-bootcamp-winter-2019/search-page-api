const test = QUnit.test;

QUnit.module('CREATE TEMPLATE TEST');

function createCatTemplateFunction(catObject) {
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

test('create cat template function', assert => {
    // arrange
    const catObject = {
        title: 'All Of Our Cats',
        img: 'https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/549585-istock-909106260.jpg?itok=ds7LqH1N&resize=1100x1100',
        breed: 'Breed',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur voluptates corporis odio architecto excepturi nesciunt autem. Nulla quo nam sint adipisci cum fuga doloremque voluptatum fugiat ipsa! Minus, eligendi!'
    };

    const expected = `
        <li>
            <h2>All Of Our Cats</h2>
            <img src="https://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/549585-istock-909106260.jpg?itok=ds7LqH1N&amp;resize=1100x1100">
            <h2>Breed: Breed</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius consequatur voluptates corporis odio architecto excepturi nesciunt autem. Nulla quo nam sint adipisci cum fuga doloremque voluptatum fugiat ipsa! Minus, eligendi!</p>
        </li>
    `;
    // act
    const result = createCatTemplateFunction(catObject);
    // assert
    assert.htmlEqual(result, expected);
});