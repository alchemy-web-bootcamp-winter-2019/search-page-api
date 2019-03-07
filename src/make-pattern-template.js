export default function makePatternTemplate(pattern) {
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