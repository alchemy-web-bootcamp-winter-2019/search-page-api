export default function makePatternTemplate(pattern) {
    const permalink = pattern.permalink;
    const patternName = pattern.name;

    let designerUrl = null;
    let authorName = null;
    let ravUserName = null;
    let patternImg = null;

    // if the above items are not present, add placeholders

    if(!pattern.pattern_sources[0].url) {
        designerUrl = 'https://www.ravelry.com';
    }
    else {
        designerUrl = pattern.pattern_sources[0].url;
    }

    if(!pattern.pattern_author.name) {
        authorName = 'Author Unknown';
    }
    else {
        authorName = pattern.pattern_author.name;
    }

    if(!pattern.pattern_author.users[0]) {
        ravUserName = 'Not On Ravelry';
    }
    else {
        ravUserName = pattern.pattern_author.users[0].username;
    }


    if(!pattern.first_photo.medium_url) {
        patternImg = '../assets/yarn.gif';
    }
    else {
        patternImg = pattern.first_photo.medium_url;
    }

    const html = `
    <li>
    <section class="li-text">
        <a href="https://www.ravelry.com/patterns/library/${permalink}"><h2>${patternName}</h2></a>
        <p>Designer: <a href="${designerUrl}">${authorName}</a></p>
        <p>Ravelry Username: ${ravUserName}</p>
    </section>

    <section class="li-image">
        <a href="https://www.ravelry.com/patterns/library/${permalink}"><img src="${patternImg}" alt=""></a>
    </section>
    </li>
    `;

    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}