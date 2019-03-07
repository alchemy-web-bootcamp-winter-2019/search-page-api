export function makeArticleList(article) {
    const html = `
    <li>
                <img src="${article.urlToImage}" onerror="this.onerror=null;this.src='https://ak6.picdn.net/shutterstock/videos/1418746/thumb/5.jpg';">
                <h2>${article.title}</h2>
                <p>by ${article.author}</p>
                <p>${article.description}</p>
                <p>Read more on <a href="${article.url}">${article.source.name}</a>.</p>
            </li>`;
    const template = document.createElement('template');
    template.innerHTML = html;
    return template.content;
}

const articleListNode = document.getElementById('article-list');

export default function loadArticles(articles) {
    while(articleListNode.children.length > 0) {
        articleListNode.lastElementChild.remove();
    }
    articles.forEach(article => {
        const articleLI = makeArticleList(article);
        articleListNode.appendChild(articleLI);
    });

}