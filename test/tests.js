import './html-equal.js';

const test = QUnit.test;

function makePatternTemplate(pattern) {
    console.log(pattern.pattern_author.users[0].username);
    const html = `
    <li>
    <section class="li-text">
        <a href="https://www.ravelry.com/patterns/library/${pattern.permalink}"><h2>${pattern.name}</h2></a>
        <p>Designer: <a href="${pattern.pattern_sources[0].url}">${pattern.pattern_author.name}</a></p>
        <p>Ravelry Username: ${pattern.pattern_author.users[0].username}</p>
    </section>

    <section class="li-image">
        <a href="https://www.ravelry.com/patterns/library/${pattern.permalink}"><img src="${pattern.first_photo.medium_url}" alt=""></a>
    </section>
    </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}


test('html template will match template literal', assert => {
    //arrange
    const pattern = {
        "id": 909820,
        "name": "Clean Lines",
        "permalink": "clean-lines-2",
        "first_photo": {
            "medium_url": "https://images4-b.ravelrycache.com/uploads/stitchnerd/611130017/stitchnerd-023_medium.jpg",
        },
        "pattern_author": {
            "name": "Susan Ashcroft",
            "users": [
                {
                    "username": "stitchnerd",
                }
            ]
        },
        "pattern_sources": [
            {
                "url": "http://www.ravelry.com/stores/stitchnerd-designs",
            }
        ]
    };


    //act
    
    const result = makePatternTemplate(pattern);
    //assert
    assert.htmlEqual(result, /*html*/ `
    <li>
    <section class="li-text">
        <a href="https://www.ravelry.com/patterns/library/clean-lines-2"><h2>Clean Lines</h2></a>
        <p>Designer: <a href="http://www.ravelry.com/stores/stitchnerd-designs">Susan Ashcroft</a></p>
        <p>Ravelry Username: stitchnerd</p>
    </section>
    
    <section class="li-image">
        <a href="https://www.ravelry.com/patterns/library/clean-lines-2"><img src="https://images4-b.ravelrycache.com/uploads/stitchnerd/611130017/stitchnerd-023_medium.jpg" alt=""></a>
    </section>
    </li>
    `);
});