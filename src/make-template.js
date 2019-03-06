export function makeTemplate(quote) {
    const html = /*html*/`
    <li>
        <p>${quote.value}</p>
        <h2>${convertDate(quote.appeared_at)}</h2>
    </li>
    `;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

export function convertDate(utcCode){
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const date = new Date(utcCode);
    const niceDate = `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    return niceDate;
}