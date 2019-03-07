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

const quoteListUl = document.getElementById('quote-list');
export default function loadQuotes(quoteList){
    clearRows();
    quoteList.forEach(quote => {
        const dom = makeTemplate(quote);
        quoteListUl.appendChild(dom);
    });
}

function clearRows(){
    while(quoteListUl.firstChild){
        quoteListUl.firstChild.remove();
    }
}

const previousButton = document.getElementById('previous-button');
const nextButton = document.getElementById('next-button');
const currentPageNode = document.getElementById('current-page');
const totalPagesNode = document.getElementById('total-pages');
const searchInput = document.getElementById('search');

export function loadPageInfo(totalQuotesNumber, queryOptions){
    const PER_PAGE = 9;
    searchInput.value = queryOptions.searchTerm;
    currentPageNode.textContent = queryOptions.page;
    const totalPagesNumber = Math.ceil(totalQuotesNumber / PER_PAGE);
    totalPagesNode.textContent = totalPagesNumber;
    nextButton.disabled = queryOptions.page >= totalPagesNumber;
    previousButton.disabled = queryOptions.page <= 1;
}
